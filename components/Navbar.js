import { useRef } from "react";

export default function Navbar() {
  const ulRef = useRef();
  const menuRef = useRef();
  return (
    <nav className="primary-nav container">
      <div className="logo">
        <img className="logo-image" src="/logo.png" alt="Menu" />
      </div>

      <ul
        className="primary-navigation"
        id="primary-navigation"
        role="list"
        data-open="false"
        ref={ulRef}
      >
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#tracks">Tracks</a>
        </li>
        <li>
          <a href="#sponsors">Sponsors</a>
        </li>
        <li>
          <a href="#">Team</a>
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
