import {useSortable} from "@dnd-kit/sortable";
import GalleryItem from "@/components/GalleryItem/GalleryItem.jsx";
import {CSS} from "@dnd-kit/utilities";
import PropTypes from "prop-types";

const SortableItem = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id: props.item.id
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
    };

    return (
        <GalleryItem
            ref={setNodeRef}
            style={style}
            {...props}
            {...attributes}
            {...listeners}
        />
    );
};

SortableItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string,
        id: PropTypes.number,
    })
}

export default SortableItem