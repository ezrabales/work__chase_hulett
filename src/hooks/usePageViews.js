import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}

export default usePageViews;
