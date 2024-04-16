import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        const alreadyExists = categories.includes(newCategory)

        if (!alreadyExists) {
            setCategories([newCategory, ...categories])
        }
    }

    return (
        <>
            <div>GifExpertApp</div>

            <AddCategory onAddCategory={onAddCategory} />

            <ol key={'hola'} className="categories">
                {categories.map(category => (
                    <GifGrid category={category} key={category} />
                ))}
            </ol>
        </>
    )
}
