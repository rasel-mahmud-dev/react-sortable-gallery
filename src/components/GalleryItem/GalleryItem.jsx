import PropTypes from "prop-types"
import "./galleryItem.scss"
import {forwardRef, useRef} from "react";
import useGalleryStore from "@/store/useGalleryStore.js";
import {useDispatch} from "@/store/useGalleryContextProvider.jsx";
import {ActionTypes} from "@/store/actionTypes.js";

const GalleryItem = forwardRef(({
                                    currentDragged,
                                    item,
                                    isDragging,
                                    style,
                                    onTouchStart,
                                    onMouseDown,
                                    ...props
                                }, ref) => {

    const checkBoxRef = useRef()
    const {selected} = useGalleryStore();
    const dispatch = useDispatch()

    function toggleSelectItem(id) {
        dispatch({
            type: ActionTypes.TOGGLE_SELECT_ITEM,
            payload: id
        })
    }

    function handleMouseDown(e, isClick = true) {
        if (e.target.tagName === "INPUT") {
            checkBoxRef.current?.onChange()
        }
        return isClick ? onMouseDown(e) : onTouchStart(e)

    }

    let genClassNames = props.className ?? ""
    if (currentDragged) genClassNames += " " + currentDragged
    if (isDragging) genClassNames += " dragging"
    if (selected.includes(item.id)) genClassNames += " selected"

    return (
        <li
            ref={ref}
            className={`gallery-item ${genClassNames}`}
            style={style}
            onMouseDown={(e) => handleMouseDown(e, true)}
            onTouchStart={(e) => handleMouseDown(e, false)}
            {...props}
        >

            {!isDragging && (
                <input
                    onChange={() => toggleSelectItem(item.id)}
                    checked={selected.includes(item.id)}
                    className="select-input"
                    ref={checkBoxRef}
                    type="checkbox"
                />
            )}
            <img src={item.image} alt={item.title}/>
        </li>
    )
})

GalleryItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string,
        id: PropTypes.number,
    }),
    currentDragged: PropTypes.bool,
    isDragging: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    placeholder: PropTypes.bool,
    onMouseDown: PropTypes.func,
    onTouchStart: PropTypes.func
}

GalleryItem.displayName = 'GalleryItem';

export default GalleryItem;
