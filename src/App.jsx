import Gallery from "@/components/Gallery/Gallery";
import useGalleryContextProvider, {useDispatch} from "@/store/useGalleryContextProvider";
import {useEffect} from "react";
import {ActionTypes} from "@/store/actionTypes.js";


function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({
            type: ActionTypes.LOAD_IMAGES,
            payload: [
                {id: 1, title: "item 1", image: "/images/image-1.webp"},
                {id: 2, title: "item 2", image: "/images/image-2.webp"},
                {id: 3, title: "item 3", image: "/images/image-3.webp"},
                {id: 4, title: "item 4", image: "/images/image-4.webp"},
                {id: 5, title: "item 5", image: "/images/image-5.webp"},
                {id: 6, title: "item 6", image: "/images/image-6.webp"},
                {id: 7, title: "item 7", image: "/images/image-7.webp"},
                {id: 8, title: "item 8", image: "/images/image-8.webp"},
                {id: 9, title: "item 9", image: "/images/image-9.webp"},
                {id: 10, title: "item 10", image: "/images/image-10.jpeg"},
                {id: 11, title: "item 11", image: "/images/image-11.jpeg"},
            ]
        })
    }, [])

    return (
        <main className="main-container">
            <Gallery />
        </main>
    )
}

export default useGalleryContextProvider(App)