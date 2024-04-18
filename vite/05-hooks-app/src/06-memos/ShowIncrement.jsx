import PropTypes from 'prop-types'


export const ShowIncrement = ({increment}) => {
    return (
        <button className="btn btn-primary mt-2" onClick={()=> increment()}>Increment</button>
    )
}


ShowIncrement.propTypes = {
    increment: PropTypes.func
}
