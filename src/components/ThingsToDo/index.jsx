import { Compass, HomeCampfire, HomeDeer, HomeHiker, HomeSnowboard } from "../../assets/images"
import styles from "./things.module.css"

export default function ThingsToDo() {
    return (
        <section className={styles.ThingSection}>
            <div>
                <img src={Compass} alt="Compass showing directions" />
                <h1>THINGS TO DO</h1>
                <p>Explore the exciting activities and events at Montana Mountain.</p>
            </div>
            <div className={styles.imagesSection}>
                <img src={HomeSnowboard} alt="" />
                <img src={HomeDeer} alt="" />
                <img src={HomeCampfire} alt="" />
                <img src={HomeHiker} alt="" />
            </div>
        </section>
    )
}