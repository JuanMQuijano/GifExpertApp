import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Office'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} /*setCategories={setCategories}*/ />


            {/* Listado de Gif */}
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}

        </>
    )
}

export default GifExpertApp

