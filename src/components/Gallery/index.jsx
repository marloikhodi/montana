import styles from "./gallery.module.css"

export default function GalleryHeader() {
    return (
        <section className={styles.galleryHeaderContainer}>
            <Header page="gallery" />
        </section>
    )
}