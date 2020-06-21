import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

//style 컨테이너 생성
const Container = styled.div`
  padding: 20px;
`
//style 상속
const ExtendContainer = styled(Container)``

function Title({ title }) {
  return <div>{title}</div>
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
}
function Header() {
  const [title, setTitle] = useState('기본상태값')
  return (
    <ExtendContainer>
      <Container>
        <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <Title title={title} />
      </Container>
    </ExtendContainer>
  )
}

export default Header
