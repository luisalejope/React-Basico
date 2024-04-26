import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)

    const onInputChange = (event) => {
        const { name, value } = event.target

        const newValues = {
            ...formState,
            [name]: value
        }

        setFormState(newValues)
    }

    const onResetForm = () => setFormState(initialForm)

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
};
