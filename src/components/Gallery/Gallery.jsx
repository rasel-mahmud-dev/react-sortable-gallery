import "./gallery.scss"
import GalleryItem from "@/components/GalleryItem/GalleryItem.jsx";
import useGalleryStore from "@/store/useGalleryStore.js";
import GalleryHeader from "@/components/GalleryHeader/GalleryHeader.jsx";

const Gallery = () => {

    const {images} = useGalleryStore()

    return (
        <section className="gallery-wrapper">
            <GalleryHeader />
            <div className="gallery">
                {images.map(item => (
                    <GalleryItem key={item.id} image={item.image}/>
                ))}
            </div>

        </section>
    );
};

export default Gallery;