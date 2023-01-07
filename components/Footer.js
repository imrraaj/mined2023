import { FaDiscord, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="logo">
        <img className="logo-image" src="/logo.png" alt="Menu" />
      </div>

      <div>
        <ul className="secondary-navigation">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Tracks</a>
          </li>
          <li>
            <a href="#">Sponsors</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="socials-list">
          <li>
            <a href="#">
              <FaDiscord />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              <MdEmail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
