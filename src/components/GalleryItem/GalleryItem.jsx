import PropTypes from "prop-types"
import "./galleryItem.scss"
import {forwardRef} from "react";
import {useDispatch} from "@/store/useGalleryContextProvider.jsx";
import {ActionTypes} from "@/store/actionTypes.js";
import useGalleryStore from "@/store/useGalleryStore.js";

const GalleryItem = forwardRef(({currentDragged, item, isDragging, style, ...props}, ref) => {
    const dispatch = useDispatch()
    const {selected} = useGalleryStore()

    function toggleSelectItem(id) {
        console.log(id)
        dispatch({
            type: ActionTypes.TOGGLE_SELECT_ITEM,
            payload: id
        })
    }

    return (
        <li
            ref={ref}
            className={`gallery-item ${currentDragged ? "currentDragged" : ""} ${props.className ?? ""} ${isDragging ? "dragging" : ""}`}
            style={style}
            {...props}>
            <input
                checked={selected.includes(item.id)}
                onChange={() => toggleSelectItem(item.id)}
                className="select-input"
                type="checkbox"
            />
            <img
                src={item.image}
            />
        </li>
    )
})

GalleryItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        id: PropTypes.number,
    }),
    currentDragged: PropTypes.bool,
    isDragging: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    placeholder: PropTypes.bool
}

GalleryItem.displayName = 'GalleryItem';

export default GalleryItem;
