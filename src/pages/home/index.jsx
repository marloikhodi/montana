import { Header } from "../../components";
import styles from "./home.module.css"

export default function Home() {
    return (
        <section className={styles.homeSection}>
            <Header page="home" />

        </section>
    )
}