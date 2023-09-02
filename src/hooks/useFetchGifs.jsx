import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getImages = async () => {
            const newImages = await getGifs(category);
            setImages(newImages);
        }

        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            getImages()
        }, 2000)

    }, [])

    return {
        images,
        isLoading
    }
}

export default useFetchGifs
