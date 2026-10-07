import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// On navigation, scroll to the section named in the URL hash (e.g. "/#booking")
// or back to the top of the new page.
export const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);
};
