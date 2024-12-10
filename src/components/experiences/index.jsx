import Header from "../header"
import styles from "./experiences.module.css"

export default function ExperiencesHeader() {
    return (
        <section className={styles.experiencesHeader}>
            <Header page="experiences" />
        </section>
    )
}