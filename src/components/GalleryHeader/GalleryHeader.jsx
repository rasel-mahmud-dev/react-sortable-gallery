import React from 'react';
import useGalleryStore from "@/store/useGalleryStore.js";
import "./galleryHeader.scss"

const GalleryHeader = () => {
    const {selected} = useGalleryStore()

    function formatFileLabel(count){
        return count > 1 ? "Files" : "File"
    }

    return (
        <header className="gallery-header">

            { selected.length ? (
                <div className="gallery-header__action_row">
                    <h1 className="gallery-header__select-count">{selected.length} {formatFileLabel(selected.length)}  Selected: </h1>
                    <h4 className="gallery-header__delete">{selected.length} {formatFileLabel(selected.length)}  Selected: </h4>
                </div>
            ) : (
                <h1 className="gallery-header__title">Gallery</h1>
            ) }

        </header>
    );
};

export default GalleryHeader;