import { BikerGallery, DeerGallery, EagleGallery, HikerGallery, HikerTwoGallery, MountainGallery, SnowboardGallery, WolfGallery } from "../../assets/images"
import styles from "./galleryimages.module.css"

export default function GalleryImages() {
    return (
        <section className={styles.imagesContainer}>
            <img src={MountainGallery} alt="Mountain Image" />
            <img src={DeerGallery} alt="Deer Image" />
            <img src={EagleGallery} alt="Eagle Image" />
            <img src={HikerGallery} alt="Hiker Image" />
            <img src={BikerGallery} alt="Biker Image" />
            <img src={WolfGallery} alt="Wolf Image" />
            <img src={HikerTwoGallery} alt="Hiker Image" />
            <img src={SnowboardGallery} alt="Snowboard Man Image" />
        </section>
    )
}