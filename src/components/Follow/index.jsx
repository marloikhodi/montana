import { BridgeInstagram, CampfireInstagram, Instagram, ParkInstagram, WolfInstagram } from "../../assets/images"
import styles from "./follow.module.css"

export default function Follow() {
    return (
        <section className={styles.followSection}>
            <div>
                <img src={Instagram} alt="Instagram Logo" />
                <h3>#Montana</h3>
                <p>Tag us on Instagram with @montana #Montana</p>
            </div>
            <div>
                <img src={WolfInstagram} alt="Image of a wolf on the snow" />
                <img src={ParkInstagram} alt="Image of a park in nature" />
                <img src={CampfireInstagram} alt="Image of a lightned campfire" />
                <img src={BridgeInstagram} alt="Image of a bridge above river" />
            </div>
            <button><p>For More Images</p></button>
        </section>
    )
}