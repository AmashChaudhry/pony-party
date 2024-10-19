'use client'; // Ensure it's a client component

import { useEffect } from 'react';

export default function VagaroWidget() {
    useEffect(() => {
        // Dynamically load the Vagaro widget script
        const script = document.createElement('script');
        script.src = "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqpCZWqC3GcT3qmV35y6RuQlXoSlXYO61Cq7fYO61WO4pUUgRAvEpInihcJEvwRapWUep2sERAJDXwOapcUbfY?v=fS4lCWHH12IIndNDLgN80wi3dOgbvyZUSSHcTKbN5w6#";
        script.async = true;
        document.body.appendChild(script);
        
        // Cleanup the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div
                id="frameTitle"
                className="embedded-widget-title"
                style={{
                    fontSize: "23px",
                    color: "#333",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    lineHeight: "24px",
                    padding: "18px 10px 8px",
                    textAlign: "center",
                    boxSizing: "border-box"
                }}
            >
                Services
            </div>
            <div
                className="vagaro"
                style={{
                    width: "250px",
                    padding: "0",
                    border: "0",
                    margin: "0 auto",
                    textAlign: "center"
                }}
            >
                {/* Links to Vagaro */}
                <a href="https://www.vagaro.com/pro/" style={{ fontSize: "14px", color: "#AAA", textDecoration: "none" }}>
                    Powered by Vagaro
                </a>
                &nbsp;
                <a href="https://www.vagaro.com/pro/salon-software" style={{ fontSize: "14px", color: "#AAA", textDecoration: "none" }}>
                    Salon Software
                </a>
                ,&nbsp;
                <a href="https://www.vagaro.com/pro/spa-software" style={{ fontSize: "14px", color: "#AAA", textDecoration: "none" }}>
                    Spa Software
                </a>
                &nbsp;&amp;&nbsp;
                <a href="https://www.vagaro.com/pro/fitness-software" style={{ fontSize: "14px", color: "#AAA", textDecoration: "none" }}>
                    Fitness Software
                </a>
            </div>
        </div>
    );
}
