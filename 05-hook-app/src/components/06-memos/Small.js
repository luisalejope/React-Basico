import React from 'react'
// se usa para memorizar y evitar que se dispare la funcion de nuevo cuando hay un cambio que no afecte al componente
export const Small = React.memo(({value}) => {
    console.log(':D')
    return (
        <small>
            {value}
        </small>
    )
})
