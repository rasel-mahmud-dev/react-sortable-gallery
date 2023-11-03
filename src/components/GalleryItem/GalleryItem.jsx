import PropTypes from "prop-types"
import "./galleryItem.scss"

const GalleryItem = ({image}) => {
    return (
        <li className={`gallery-item`}>
            <img src={image}/>
        </li>

    );
};

GalleryItem.propTypes = {
    image: PropTypes.string.isRequired
}

export default GalleryItem;