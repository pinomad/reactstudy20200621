import React from 'react'

import Container from '../shared/container'
import Text from '../shared/text'
import PropTypes from 'prop-types'
import { FILTERS } from './constants'

function Footer({ count, filter, onChangeFilter }) {
  return (
    <Container>
      <Text>item count: {count}</Text>
      <ul>
        {FILTERS.map((type, idx) => (
          <li key={idx} onClick={() => onChangeFilter(type)}>
            <Text bold={type === filter}>{type}</Text>
          </li>
        ))}
      </ul>
    </Container>
  )
}

Footer.propTypes = {
  count: PropTypes.number,
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
}
export default Footer
