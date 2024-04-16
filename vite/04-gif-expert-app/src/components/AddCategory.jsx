import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e) => setInputValue(e.target.value)
    

    const onSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length <= 1) {
            return;
        }

        onAddCategory(inputValue.trim())
        setInputValue('')
    }


  return (
    <form onSubmit={onSubmit} aria-label="form">  
        <input type="text" placeholder="Buscar Gifs" onChange={onInputChange} value={inputValue}/>
    </form>
  )
}


AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}

