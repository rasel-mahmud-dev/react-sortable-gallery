import {useContext} from "react";
import GalleryContext from "@/store/GalleryContext.js";

function useGalleryStore(){
    return useContext(GalleryContext)
}

export default useGalleryStore