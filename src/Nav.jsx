import "./Nav.css";

export default function Nav() {
  let open = "<";
  let close = "/>";
  return (
    <>
      <div className="nav">
        <a href="https://shivtiwari.site">
          <div className="xmlName flex">
            <div>{open}</div>
            <div style={{ color: "#87CEEB" }}>Shiv</div>
            <div>{close}</div>
          </div>
        </a>
        <div className="socialsButtonContainer">
          <div className="socialsButton">
            <a href="https://www.linkedin.com/in/shivjitiwari/" target="_blank">
              <img src="linkedIn.png" alt="in" />
            </a>
          </div>
          <div className="socialsButton">
            <a href="https://www.github.com/ytgrad/" target="_blank">
              <img src="github.png" alt="git" />
            </a>
          </div>
          <div className="socialsButton">
            <a href="https://www.twitter.com/yt_grad" target="_blank">
              <img
                style={{ width: "60%", height: "60%" }}
                src="x.png"
                alt="x"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
