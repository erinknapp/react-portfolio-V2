import "./topbar.scss";
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jadefire
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>908-246-8284</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>erin.knapp@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span>https://github.com/erinknapp</span>

          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}