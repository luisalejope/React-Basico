import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react-dom/test-utils"

describe('Pruebas en useForm Hook', () => {

    const initialForm = {
        name: '',
        email: '',
        password: ''
    }
    test('Debe de retornar los valores iniciales suministrados', () => {
        const {result} = renderHook(()=>useForm(initialForm))

        const { name, email, password, onInputChange, onResetForm} = result.current

        expect(name).toBe(initialForm.name)
        expect(email).toBe(initialForm.email)
        expect(password).toBe(initialForm.password)
        expect(onInputChange).toEqual(expect.any(Function))
        expect(onResetForm).toEqual(expect.any(Function))
    })

    test('debe de cambiar el name del fromulario', () => {
        const newValue = 'Luis';

        const event = {
            target: {
                name: 'name',
                value: newValue
            }
        }

        const { result } = renderHook(()=>useForm(initialForm));

        const {onInputChange} = result.current;

        act(()=>{
            onInputChange(event)
        })

        const { name, email, password } = result.current

        expect(name).toBe(newValue);
        expect(email).toBe(initialForm.email)
        expect(password).toBe(initialForm.password)
    })

    test('debe de resetear el formulario a los valores por defecto', () => {
        const newValue = 'Luis';

        const event = {
            target: {
                name: 'name',
                value: newValue
            }
        }

        const { result } = renderHook(()=>useForm(initialForm));

        const {onInputChange, onResetForm} = result.current;

        act(()=>{
            onInputChange(event);
            onResetForm();
        })

        const { name, email, password } = result.current;

        expect(name).toBe(initialForm.name);
        expect(email).toBe(initialForm.email);
        expect(password).toBe(initialForm.password);
    })
})