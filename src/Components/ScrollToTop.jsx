import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    // move to top left\
    //console.log({ pathname: location.pathname });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return <></>;
}
