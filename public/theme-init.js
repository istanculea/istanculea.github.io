// Theme initialization script
// Runs before React mounts to prevent FOUC (Flash of Unstyled Content)
(function() {
  try {
    // Read theme from localStorage
    const theme = localStorage.getItem('portfolio-theme');
    
    // Apply theme class immediately
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // System preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  } catch (e) {
    // Fail silently - theme will be set by React
  }
})();