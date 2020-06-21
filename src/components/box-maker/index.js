import React from 'react'

import Container from '../shared/container'
import Print from './print'
import Form from './form'
import { BoxContextProvider } from './context'

function BoxMaker() {
  return (
    <BoxContextProvider>
      <Container>
        <Form />
        <Print />
      </Container>
    </BoxContextProvider>
  )
}
export default BoxMaker
