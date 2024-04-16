import PropTypes from 'prop-types'

export const GifGridItem = ({title, url, id}) => {
  return (
    <div className='card' id={id}>
        <h2>
            {title.trim() !== '' ? title : 'GIF SIN TITULO'}
        </h2>
        <img src={url} alt={title} />
    </div>
  )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string
}
