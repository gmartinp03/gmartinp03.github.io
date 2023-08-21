import React, { useState } from "react";
function NavBar() {
  const navItems = [
    {
      id: 1,
      title: "About",
    },
    {
      id: 2,
      title: "Experience",
    },
    {
      id: 3,
      title: "Projects",
    },
    {
      id: 4,
      title: "Contact",
    },
  ];

  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav className="header">
        <div className="logo">
          <i className="fa-brands fa-space-awesome"></i>
        </div>
        <input
          type="checkbox"
          id="toggle-nav"
          className="toggle-nav"
          checked={menu}
        />
        <div className="navbar">
          <ul id="nav-links">
            {navItems.map((navItems) => (
              <li>
                <a href={`#${navItems.title}`} onClick={() => setMenu(false)}>
                  {navItems.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <label
          for="toggle-nav"
          className="toggle-nav-label"
          onClick={() => setMenu(true)}
        >
          <span></span>
        </label>
      </nav>
    </header>
  );
}

export default NavBar;
