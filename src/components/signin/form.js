import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../shared/input'
import Container from '../shared/container'
import Button from '../shared/button'
import Text from '../shared/text'

function Form({ onLogin }) {
  const [formValues, setFormValues] = useState({
    name: '',
    password: '',
  })
  const [isError, setIsError] = useState(false)
  const handleInput = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleClearForm = () => {
    setIsError(false)
    setFormValues({
      name: '',
      password: '',
    })
  }
  const handleSubmit = () => {
    const { name, password } = formValues
    const isError = !name || !password
    if (isError) {
      setIsError(true)
    } else {
      onLogin(name)
      handleClearForm()
    }
  }
  return (
    <Container>
      <Container margin="0 0 10px 0">
        <Text>이름</Text>
        <Input name="name" onChange={handleInput} value={formValues.name} />
      </Container>

      <Container margin="0 0 10px 0">
        <Text>비밀번호</Text>
        <Input
          name="password"
          onChange={handleInput}
          value={formValues.password}
        />
      </Container>
      {isError ? (
        <Text color="red" margin="10px 0" block>
          입력된 정보를 확인해주세요.
        </Text>
      ) : null}

      <Button full padding="15px 0" onClick={handleSubmit}>
        로그인
      </Button>
    </Container>
  )
}
Form.propTypes = {
  onLogin: PropTypes.func,
}
export default Form
