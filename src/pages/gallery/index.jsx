import { Gallery } from "../../components"
import styles from "./home.module.css"

export default function Home() {
    return (
        <section className={styles.galleryContainer}>
            <Gallery />
        </section>
    )
}