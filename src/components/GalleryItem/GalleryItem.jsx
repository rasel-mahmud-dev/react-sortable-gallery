import PropTypes from "prop-types"
import "./galleryItem.scss"
import {forwardRef} from "react";

const GalleryItem =  forwardRef(({index, currentDragged, item, withOpacity, isDragging, style, ...props}, ref) => {
    return (
        <li className={`gallery-item`} ref={ref} {...props}>
            <img src={item.image}/>
        </li>

    );
})

GalleryItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired
    })
}

export default GalleryItem;