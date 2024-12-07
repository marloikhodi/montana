import Header from "../header"
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <Header page="home" />
            <div className={styles.heroTitle}>
                <h3>Discover</h3>
                <h1>Montana</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim </p>
                <button><p>Explore Now</p></button>
            </div>
        </section>
    )
}