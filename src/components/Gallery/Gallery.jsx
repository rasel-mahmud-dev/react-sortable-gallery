import "./gallery.scss"
import useGalleryStore from "@/store/useGalleryStore.js";
import GalleryHeader from "@/components/GalleryHeader/GalleryHeader.jsx";
import {closestCenter, DndContext, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors} from "@dnd-kit/core";
import {arrayMove, rectSortingStrategy, SortableContext} from "@dnd-kit/sortable";
import {useCallback, useEffect, useState} from "react";
import SortableItem from "@/components/GalleryItem/SortableItem.jsx";
import AddGalleryItem from "@/components/AddGalleryItem/AddGalleryItem.jsx";

const Gallery = () => {

    const {images} = useGalleryStore();
    const [items, setItems] = useState(images)

    useEffect(() => {
        setItems(images)
    }, [images.length])


    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragStart = useCallback((event) => {
        setActiveId(event.active.id);
    }, []);


    const handleDragEnd = useCallback((event) => {
        const {active, over} = event;
        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(i => i.id === active.id);
                const newIndex = items.findIndex(i => i.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }

        setActiveId(null);
    }, []);
    const handleDragCancel = useCallback(() => {
        setActiveId(null);
    }, []);

    return (
        <section className="gallery-wrapper">
            <GalleryHeader/>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
            >
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    <div className="gallery">
                        {items.map((item, i) => (
                            <SortableItem
                                key={item.id}
                                index={i}
                                currentDragged={activeId === item.id}
                                item={item}
                            />
                        ))}
                        <AddGalleryItem />
                    </div>
                </SortableContext>

                <DragOverlay className="dragged-placeholder" adjustScale>
                    {activeId ? <SortableItem
                        currentDragged={false}
                        item={items.find(i => i.id === activeId)}
                        isDragging
                    /> : null}
                </DragOverlay>
            </DndContext>


        </section>
    );
};

export default Gallery;