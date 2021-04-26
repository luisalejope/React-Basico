import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, title, url}) => {
    return (
        <>
        <img src={url} alt={title}></img>
        </>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
