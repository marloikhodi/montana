import { MontanaLogoFooter } from "../../assets/images"
import styles from "./footer.module.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className={styles.backgroundImage}>
            <section className={styles.footerSection}>
                <div className={styles.leftSide}>
                    <img src={MontanaLogoFooter} alt="Montana Footer Logo" />
                    <div>
                        <div>
                            <p>123 Mountain Trail, Helena, MT 59601</p>
                            <p>contact@montana.com</p>
                        </div>
                        <div>
                            <p>Mon - Sun</p>
                            <p>9:00 am - 5:00 pm</p>
                        </div>
                    </div>
                </div>
                <div className={styles.middleSide}>
                    <Link to="/"><p>DISCOVER</p></Link>
                    <Link to="/experiences"><p>EXPERIENCES</p></Link>
                    <Link to="/gallery"><p>GALLERY</p></Link>
                </div>
                <div className={styles.rightSide}>
                    <p>Are you interested?</p>
                    <input type="text" placeholder="Submit..." />
                    <button>
                        <p>Submit</p>
                    </button>
                </div>
            </section>
        </div>
    )
}