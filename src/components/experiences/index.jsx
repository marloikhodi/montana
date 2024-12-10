import Header from "../header"
import styles from "./experiences.module.css"

export default function ExperiencesHeader() {
    return (
        <section className={styles.experiencesHeaderContainer}>
            <Header page="experiences" />
            <h1>EXPERIENCES</h1>
        </section>
    )
}