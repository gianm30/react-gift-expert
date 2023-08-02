import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        onNewCategory(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue}
                onChange={onInputChange} />
        </form>
    );
}