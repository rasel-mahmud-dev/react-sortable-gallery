import {useSortable} from "@dnd-kit/sortable";
import GalleryItem from "@/components/GalleryItem/GalleryItem.jsx";
import {CSS} from "@dnd-kit/utilities";

const SortableItem = (props) => {
    const {
        isDragging,
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
            withOpacity={isDragging}
            {...props}
            {...attributes}
            {...listeners}
        />
    );
};

export default SortableItem