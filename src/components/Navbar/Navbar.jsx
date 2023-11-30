import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { FiAlignRight, FiMoon, FiSun, FiXCircle , } from "react-icons/fi";
import {RiArrowDropDownLine} from "react-icons/ri";
import Carousel from "../Carousel/Carousel";

const Navbar = () => {
  const savedTheme = localStorage.getItem("theme") || "light-theme";
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme to local storage
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const [open, setOpen] = useState(false);
  const toggleBtn = () => {
    setOpen(!open);

  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <d iv className={styles.nav_container}>
        <div className={styles.first_box}>
          <div className={styles.logo}>
            <Link to={"/"} onClick={closeMenu}>
            <img src="https://demo.themeies.com/cricnotch/assets/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className={styles.avater}>
          <div className={styles.dark_mode_btn} onClick={toggleTheme}>
          {theme === "light-theme" ? <FiMoon /> : <FiSun />}
          </div>
          </div>
        </div>
        <div className={styles.second_box}>
          <Carousel/>
        </div>
        <div className={styles.third_box}>
        <span
                className={styles.burgerIcone}
                onClick={toggleBtn}
                
              >{!open?<FiAlignRight/>:<FiXCircle/>}</span>
          <div className={`${open && styles.burgerMenu_items} ${styles.nav_menu_items}`}>
            <ul>
              <li>
                <Link to={"/"} onClick={closeMenu}>HOME</Link>
              </li>
              <li>
                <Link to={"/Livescore"} onClick={closeMenu}>LIVE SCORE</Link>
              </li>
              <li>
                <div><span>SERIES</span> <span className={styles.dropDown_icon}><RiArrowDropDownLine/></span></div>
                
                <div className={styles.submenu}>
                  <Link to={"/series"} onClick={closeMenu}>Series</Link>
                  <Link to={"/news"} onClick={closeMenu}>News</Link>
                  {/* <Link to={"/stats"} onClick={closeMenu}>Stats</Link> */}
                </div>
              </li>
              <li>
                <Link to={"/teams"} onClick={closeMenu}>THE TEAM</Link>
              </li>
              <li>
                <Link to={"/news"} onClick={closeMenu}>NEWS</Link>
              </li>
            </ul>
          </div>
          <div className={styles.nav_serch_bar}>
            <input onClick={closeMenu} className={styles.input} type="search" placeholder="serch"  />
            
          </div>
        </div>
      </d>
    </>
    //     <div className={styles.navbar_container}>
    //     <div className={styles.navbar}>
    //       <div className={styles.navbar_links}>
    //         <ul>
    //           <li>
    //             Parent Item 1
    //             <div className={styles.submenu}>
    //               Submenu Content 1
    //             </div>
    //           </li>
    //           <li>
    //           <Link to={"/series"}>parent Content 2</Link>
    //             <div className={styles.submenu}>
    //               <Link to={"/series"}>Submenu Content 2</Link>
    //               <Link to={"/news"}>Submenu Content 2</Link>
    //               <Link to={"/stats"}>Submenu Content 3</Link>
    //             </div>
    //           </li>
    //           {/* Add more parent items here */}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Navbar;
