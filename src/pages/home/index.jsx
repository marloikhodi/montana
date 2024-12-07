import { Header, Hero } from "../../components";
import styles from "./home.module.css"

export default function Home() {
    return (
        <section className={styles.homeContainer}>
            <Hero />

        </section>
    )
}