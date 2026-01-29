import { getStoredConsent } from './consent'

const _PLAUSIBLE_DOMAIN = "your-domain"

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
 */
export function registerConsentListeners() {
  window.addEventListener('consent:changed', (event: Event) => {
    const customEvent = event as CustomEvent
    const value = customEvent.detail
    
    if (value === 'accepted') {
      loadPlausibleScript()
    } else if (value === 'rejected') {
      // Remove Plausible script if present
      const script = document.querySelector('script[data-domain]')
      if (script) {
        script.remove()
      }
    }
  })
}

/**
 * Load the Plausible analytics script
 */
function loadPlausibleScript() {
  // Check if script is already loaded
  if (document.querySelector('script[data-domain]')) {
    return
  }

  const script = document.createElement('script')
  script.defer = true
  script.setAttribute('data-domain', _PLAUSIBLE_DOMAIN)
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
}