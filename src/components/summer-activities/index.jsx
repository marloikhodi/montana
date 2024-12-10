import { SummerActivitieOne, SummerActivitieThree, SummerActivitieTwo } from "../../assets/images"
import styles from "./summer.module.css"

export default function SummerActivities() {
    return (
        <section className={styles.summerSection}>
            <h3>SUMMER ACTIVITIES</h3>
            <div className={styles.underline}></div>
            <div>
                <img src={SummerActivitieOne} alt="Activitie you can do during summer" />
                <img src={SummerActivitieTwo} alt="Activitie you can do during summer" />
                <img src={SummerActivitieThree} alt="Activitie you can do during summer" />
            </div>
        </section>
    )
}