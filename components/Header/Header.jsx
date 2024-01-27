// NextJS
import Link from "next/link";
import Image from "next/image";

 // Images
import logoImg from '@/public/images/logo.png'

// Styles
import styles from '@/components/Header/header.module.css'

// Components
import HeaderBackground from "../HeaderBackground/HeaderBackground";
import NavLink from "../NavLink/NavLink";


export default function Header(){
  return(
    <>
      <HeaderBackground />

      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image 
            src={logoImg} 
            alt="A plate whit food on it"
            priority
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>
                Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}