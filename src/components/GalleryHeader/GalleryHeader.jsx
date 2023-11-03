import React from 'react';
import useGalleryStore from "@/store/useGalleryStore.js";
import "./galleryHeader.scss"
import {useDispatch} from "@/store/useGalleryContextProvider.jsx";
import {ActionTypes} from "@/store/actionTypes.js";
import Button from "@/components/Button/Button.jsx";

const GalleryHeader = () => {
    const {selected} = useGalleryStore()
    const dispatch = useDispatch()

    function formatFileLabel(count){
        return count > 1 ? "Files" : "File"
    }

    function handleDeleteFiles(){
        dispatch({
            type: ActionTypes.DELETE_IMAGES,
            payload: selected
        })
    }

    return (
        <header className="gallery-header">

            { selected.length ? (
                <div className="gallery-header__action_row">
                    <h1 className="gallery-header__select-count">{selected.length} {formatFileLabel(selected.length)} Selected</h1>
                    <Button variant="text" onClick={handleDeleteFiles}
                            className="gallery-header__delete">
                        Delete <span>{formatFileLabel(selected.length)}</span>
                    </Button>
                </div>
            ) : (
                <h1 className="gallery-header__title">Gallery</h1>
            ) }

        </header>
    );
};

export default GalleryHeader;