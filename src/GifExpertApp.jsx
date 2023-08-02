import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Iron Man']);
    const onAddCategory = newCategory => {
        if (newCategory.trim().length <= 1 || categories.includes(newCategory))
            return;
        setCategories([newCategory, ...categories]);
    }
    const onDeleteCategory = category => {
        const index = categories.indexOf(category);
        console.log(index);
        if (index !== -1)
            setCategories(categories.filter(evt => evt !== category));
    }

    return (
        <>
            <h1>Bienvenido</h1>

            <AddCategory onNewCategory={onAddCategory} />
            {categories.map(obj => (<GifGrid key={obj} category={obj} onDeleteCategory={onDeleteCategory} />))}
        </>
    )
}