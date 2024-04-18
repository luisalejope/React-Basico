/* eslint-disable react/display-name */

import { memo } from 'react'
import PropTypes from 'prop-types'

export const Small = memo(({value}) => {
    console.log('Holaaaaaaa')
  return (
    <small>{value}</small>
  )
})


Small.propTypes = {
    value: PropTypes.number
}


