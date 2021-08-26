/* REGLAS DE LOS REDUCER
1. NO DEBE DE TENER EFECTOS SECUNDARIOS
2. NO DEBE DE REALIZAR TAREAS ASINCRONAS
3. DEBE DE RETORNAR SIEMPRE UN ESTADO NUEVO
4. NO DEBE DE LLAMAR LOCALSTORAGE O SESSIONSTORAGE
5. NO DEBE DE REQUERIR MAS QUE UNA ACCION QUE PUEDE REQUERIR UN ARGUMENTO
*/

// estado inicial
const initialState = [
  {
    id: 1,
    todo: "Comprar leche",
    done: false,
  },
];

/* 
recibe el estado y la accion
donde la aciion es el que va a modificar el estado
*/
const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }

  return state;
};

// reasigna los todos
let todos = todoReducer();


// este es el cambio que se necesita en el state
const newTodo = [
  {
    id: 2,
    todo: "Comprar pan",
    done: false,
  },
];

// esta es la accion para el reducer
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo,

}


todos = todoReducer(todos, agregarTodoAction)

console.log(todos);
