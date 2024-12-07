import Header from "../header"
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <Header page="home" />
            {/* correção */}
        </section>
    )
}