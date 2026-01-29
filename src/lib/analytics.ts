import { getStoredConsent } from './consent'
import { SERVICES } from '@/config/constants'

// Track if script is being loaded to prevent race conditions
let isLoadingScript = false

// Track if listeners are already registered to prevent duplicates
let listenersRegistered = false

/**
 * Initialize analytics if consent has been granted
 */
export function initAnalytics() {
  const consent = getStoredConsent()
  if (consent === 'accepted') {
    loadPlausibleScript()
  }
}

/**
 * Register event listeners for consent changes
 * This should only be called once during app initialization
 */
export function registerConsentListeners() {
  if (listenersRegistered) {
    return
  }
  
  const handleConsentChange = (event: Event) => {
    const customEvent = event as CustomEvent<string>
    const value = customEvent.detail || getStoredConsent()
    
    if (value === 'accepted') {
      loadPlausibleScript()
    } else if (value === 'rejected') {
      // Remove Plausible script if present
      const script = document.querySelector('script[data-domain]')
      if (script) {
        script.remove()
      }
    }
  }
  
  window.addEventListener('consent:changed', handleConsentChange)
  listenersRegistered = true
}

/**
 * Load the Plausible analytics script
 */
function loadPlausibleScript() {
  // Check if script is already loaded or currently loading
  if (isLoadingScript || document.querySelector('script[data-domain]')) {
    return
  }

  // Respect Do Not Track setting
  const doNotTrack = navigator.doNotTrack === '1' || 
    (window as Window & { doNotTrack?: string }).doNotTrack === '1';
  if (doNotTrack) {
    return
  }

  isLoadingScript = true
  
  const script = document.createElement('script')
  script.defer = true
  script.setAttribute('data-domain', SERVICES.plausibleDomain)
  script.src = 'https://plausible.io/js/plausible.js'
  script.crossOrigin = 'anonymous'
  script.onload = () => {
    isLoadingScript = false
  }
  script.onerror = () => {
    isLoadingScript = false
  }
  document.head.appendChild(script)
}