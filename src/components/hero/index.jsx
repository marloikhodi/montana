import Header from "../header"
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <Header page="home" />
            <div className={styles.heroTitle}>
                <h3>Discover</h3>
                <h1>Montana</h1>
                <p>Explore the majestic landscapes, thrilling adventures, and serene beauty of Montana. Discover a world where nature meets tranquility, creating unforgettable memories. </p>
                <button><p>Explore Now</p></button>
            </div>
        </section>
    )
}