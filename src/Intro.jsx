import "./Intro.css";

export default function Intro() {
  return (
    <div className="introContainer">
      <div className="introDiv">
        <div className="hello">Hello,</div>
        <div className="name">
          I'm <span style={{ color: "cyan" }}>Shiv Ji Tiwari</span>
        </div>
        <div className="jobProfile">
          an <span style={{ color: "#a4c636" }}>Android Developer</span>
        </div>
      </div>
      <a href="https://shivtiwari.site/resume.pdf">
        <button className="cvBtn">
          <p>My Résumé</p>
          <img src="download.png" />
        </button>
      </a>
    </div>
  );
}
