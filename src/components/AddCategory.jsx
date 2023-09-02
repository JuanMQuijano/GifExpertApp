import { useState } from "react"

const AddCategory = ({ /*setCategories*/ onNewCategory }) => {

    const [category, setCategory] = useState("");

    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (category === "") {
            return alert("Debes ingresar el nombre de la categoría para poder buscar")
        }

        onNewCategory(category);
        setCategory("")
    }

    return (
        <form onSubmit={handleClick}>
            <input type="text" name="category" id="category" placeholder="Buscar Gifs" value={category} onChange={handleChange} />
        </form>
    )
}

export default AddCategory