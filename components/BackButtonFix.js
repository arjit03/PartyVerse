import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * This component fixes issues with browser back/forward button
 * where components don't render properly when navigating back
 */
export default function BackButtonFix() {
  const router = useRouter();

  useEffect(() => {
    // Handle browser back/forward button (bfcache issue)
    const handleBackForward = () => {
      // Force a full page reload when using back/forward
      window.location.reload();
    };

    // Listen to popstate event (fired when back/forward is clicked)
    window.addEventListener('popstate', handleBackForward);

    // Also handle pageshow event for bfcache
    const handlePageShow = (event) => {
      // If page is loaded from cache, reload it
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('popstate', handleBackForward);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return null; // This component doesn't render anything
}
