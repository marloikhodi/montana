import styles from "./header.module.css";
import { MontanaLogo } from "../../assets/images";

export default function Header() {
    return (
        <section className={styles.headerContainer}>
            <div>
                <img src={MontanaLogo} alt="Logo for montana.com" />
                <a href=""><p>HOME</p></a>
                <a href=""><p>EXPERIENCES</p></a>
                <a href=""><p>GALLERY</p></a>
            </div>
        </section>
    )
}