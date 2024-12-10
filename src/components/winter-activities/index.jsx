import { WinterActivitieOne, WinterActivitieThree, WinterActivitieTwo } from "../../assets/images"
import styles from "./winter.module.css"

export default function WinterActivities() {
    return (
        <section className={styles.winterSection}>
            <h3>WINTER ACTIVITIES</h3>
            <div className={styles.underline}></div>
            <div>
                <img src={WinterActivitieOne} alt="Activitie you can do during winter" />
                <img src={WinterActivitieTwo} alt="Activitie you can do during winter" />
                <img src={WinterActivitieThree} alt="Activitie you can do during winter" />
            </div>
        </section>
    )
}
