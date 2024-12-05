import styles from "./header.module.css";
import { MontanaLogo, Search } from "../../assets/images";

export default function Header({ page = null }) {
    return (
        <section className={styles.headerContainer}>
            <nav className={styles.headerNav}>
                <a href="" >
                    <img src={MontanaLogo} alt="Logo for montana.com" />
                </a>
                <a href="" ><p className={page === "home" ? styles.home : null}>HOME</p></a>
                <a href="" ><p className={page === "experiences" ? styles.experiences : null}>EXPERIENCES</p></a>
                <a href="" ><p className={page === "gallery" ? styles.gallery : null}>GALLERY</p></a>
            </nav>
            <div className={styles.searchbar}>
                <input type="text" placeholder="Search..." />
                <img src={Search} alt="Buscar" />
            </div>
        </section>
    )
}