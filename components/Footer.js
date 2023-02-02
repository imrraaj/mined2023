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
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="socials-list">
          <li>
            <a href="https://discord.gg/GSG2624M">
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
            <a href={"mailto:sapanmankad@nirmauni.ac.in"}>
              <MdEmail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
