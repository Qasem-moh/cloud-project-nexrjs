"use client";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import styles from "./Header.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          CLOUD
          <GrTechnology />
          HOSTING
        </Link>
        {toggle ? (
          <IoCloseCircle
            className={styles.closeIcon}
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <CiMenuBurger
            className={styles.menuIcon}
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
      <div
        className={styles.navLinksWrapper}
        style={{
          clipPath: (toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <ul className={styles.navLinks}>
          <Link className={styles.navLink} href="/">
            Home
          </Link>
          <Link className={styles.navLink} href="/articles">
            Articles
          </Link>
          <Link className={styles.navLink} href="/about">
            About
          </Link>
          <Link className={styles.navLink} href="/admin">
            Admin
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
