// NextJS
import Link from "next/link";
import Image from "next/image";

 // Images
import logoImg from '@/public/images/logo.png'

// Styles
import styles from '@/components/Header/header.module.css'

// Components
import HeaderBackground from "../HeaderBackground/HeaderBackground";

export default function Header(){
  return(
    <>
      <HeaderBackground />

      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image 
            src={logoImg} 
            alt="A plate whit food on it"
            width={80}
            height={80}
            priority
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"community"}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}