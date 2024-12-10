import { ExperiencesHeader, Footer, Header, SummerActivities, WinterActivities } from "../../components"
import styles from "./experiences.module.css"

export default function Experiences() {
    return (
        <section className={styles.experiencesContainer}>
            <ExperiencesHeader />
            <WinterActivities />
            <SummerActivities />
            <Footer />
        </section>
    )
}