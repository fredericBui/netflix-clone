import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      // window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-420px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://imgs.search.brave.com/8nRlRIal_cEKQ0D7BKDx1nin1vx6yFHA1J4ff88ME2M/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS42MTg0/MjcyNzcuMzIyMi9m/bGF0LDgwMHg4MDAs/MDc1LGYudTIuanBn"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Navbar;
