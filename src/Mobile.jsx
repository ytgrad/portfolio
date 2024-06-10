import { useEffect, useState } from "react";
import "./Mobile.css";

export default function Mobile() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [appDivOpacity, setAppDivOpacity] = useState(1);
  const [appDetailsPageOpacity, setAppDetailsPageOpacity] = useState(0);
  const [appDetailsPageClickthru, setAppDetailsPageClickthru] =
    useState("none");
  const appDetails = [
    {
      name: "Calculator",
      description: "A basic calculator app.",
      icon: "calculator.png",
    },
    {
      name: "Quiz",
      description: "An interactive quiz app.",
      icon: "quiz.png",
    },
  ];

  const [currentApp, setCurrentApp] = useState(0);

  const setTime = () => {
    let D = new Date();
    let min = D.getMinutes();
    if (min.toString().length < 2) {
      setMinutes(`0${min}`);
    } else {
      setMinutes(min);
    }
    let hrs = D.getHours();
    if (hrs > 12) {
      setHours(hrs - 12);
    } else {
      setHours(hrs);
    }

    // console.log("setTime called");
  };

  useEffect(() => {
    setInterval(setTime, 1000);
  }, []);

  const onAppClick = (appIndex) => {
    setAppDivOpacity(0);
    setAppDetailsPageOpacity(1);
    setAppDetailsPageClickthru("");
    setCurrentApp(appIndex);
  };

  const onBackClick = () => {
    setAppDetailsPageOpacity(0);
    setAppDivOpacity(1);
    setAppDetailsPageClickthru("none");
  };

  return (
    <>
      <div className="outerFrame">
        <div className="innerFrame">
          <div className="statusBar">
            <div className="time">{`${hours}:${minutes}`}</div>
            <div className="camera">
              <img src="notch.png" alt="O" />
            </div>
            <div className="otherStuff">
              <img src="network.png" alt="..." />
              <img src="battery.png" alt="89%" />
            </div>
          </div>
          <div className="textPanel">Apps I've built so far...</div>
          <div className="appPanel">
            <div
              className="appDetailsPage"
              style={{
                opacity: `${appDetailsPageOpacity}`,
                pointerEvents: `${appDetailsPageClickthru}`,
              }}
            >
              <div className="backArrow">
                <img src="backArrow.png" alt="back" onClick={onBackClick} />
              </div>

              <div className="appDetailsDiv">
                <div className="appDetailsLogo">
                  <img src={appDetails[currentApp].icon} alt="appIcon" />
                </div>
                <div className="appDescription">
                  <div>
                    <p className="appDescName">{appDetails[currentApp].name}</p>
                    <p className="appDescDesc">
                      {appDetails[currentApp].description}
                    </p>
                  </div>
                  <button className="downloadBtn">Download</button>
                </div>
              </div>
            </div>

            {appDetails.map((i, n) => {
              return <AppDiv key={n} index={n} icon={i.icon} name={i.name} />;
            })}
          </div>
        </div>
      </div>
    </>
  );

  function AppDiv({ index, icon, name }) {
    return (
      <div
        className="appDiv"
        onClick={() => onAppClick(index)}
        style={{ opacity: `${appDivOpacity}` }}
      >
        <img src={icon} alt="appIcon" />
        <p>{name}</p>
      </div>
    );
  }
}
