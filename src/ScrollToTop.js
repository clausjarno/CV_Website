import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation(); // Detects route changes

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // Runs whenever pathname changes

    return null;
}