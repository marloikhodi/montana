import { GalleryHeader } from "../../components"
import styles from "./gallery.module.css"

export default function Home() {
    return (
        <section className={styles.galleryContainer}>
            <GalleryHeader />
        </section>
    )
}