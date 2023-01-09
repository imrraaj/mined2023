import Link from "next/link";
import { useRef } from "react";

export default function Navbar() {
  const ulRef = useRef();
  const menuRef = useRef();
  return (
    <nav className="primary-nav container">
      <div className="logo">
        <Link href={"/"}>
          <img className="logo-image" src="/logo.png" alt="Menu" />
        </Link>
      </div>

      <ul
        className="primary-navigation"
        id="primary-navigation"
        role="list"
        data-open="false"
        ref={ulRef}
      >
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/team">Team</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button
        className="menu-icon"
        id="menu"
        ref={menuRef}
        onClick={() => {
          const value = ulRef.current.dataset.open;
          if (value == "true") {
            ulRef.current.dataset.open = "false";
            menuRef.current.dataset.open = "false";
          } else {
            ulRef.current.dataset.open = "true";
            menuRef.current.dataset.open = "true";
          }
        }}
      ></button>
    </nav>
  );
}
