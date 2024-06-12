import { useEffect, useState } from "react";

export default function Splash() {
  const [splashDisplay, setSplashDisplay] = useState("flex");
  useEffect(() => {
    setTimeout(() => {
      setSplashDisplay("none");
    }, 2000);
  }, []);
  return (
    <div className="splash" style={{ display: `${splashDisplay}` }}>
      <p>shivtiwari.site</p>
    </div>
  );
}
