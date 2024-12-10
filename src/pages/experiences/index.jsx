import { ExperiencesHeader, Footer, Header } from "../../components"
import styles from "./experiences.module.css"

export default function Experiences() {
    return (
        <section className={styles.experiencesContainer}>
            <ExperiencesHeader />
            <Footer />
        </section>
    )
}