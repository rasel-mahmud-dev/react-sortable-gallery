import "./gallery.scss"
import GalleryItem from "@/components/GalleryItem/GalleryItem.jsx";
import {useContext} from "react";
import GalleryContext from "@/store/GalleryContext.js";

const Gallery = () => {

    const {images} = useContext(GalleryContext)

    return (
        <section className="gallery">
            {images.map(item => (
                <GalleryItem key={item.id} image={item.image}/>
            ))}
        </section>
    );
};

export default Gallery;