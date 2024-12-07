import styles from "./header.module.css";
import { MontanaLogo, Search } from "../../assets/images";
import { Link } from "react-router-dom";

export default function Header({ page = null }) {
    return (
        <section className={styles.headerContainer}>
            <nav className={styles.headerNav}>
                <a href="" >
                    <img src={MontanaLogo} alt="Logo for montana.com" />
                </a>
                <Link to="/"><p className={page === "home" ? styles.home : null}>HOME</p></Link>
                <Link to="/#"><p className={page === "experiences" ? styles.experiences : null}>EXPERIENCES</p></Link>
                <Link to="/gallery"><p className={page === "gallery" ? styles.gallery : null}>GALLERY</p></Link>
            </nav>
            <div className={styles.searchbar}>
                <input type="text" placeholder="Search..." />
                <img src={Search} alt="Buscar" />
            </div>
        </section>
    )
}
