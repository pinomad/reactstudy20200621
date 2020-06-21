import React from 'react'
import PropTypes from 'prop-types'
import Container from '../shared/container'
import Text from '../shared/text'

function Body({ todos, onDeleteTodo, onUpdateStatus }) {
  return (
    <Container>
      {todos.map((todo, index) => {
        const { id, title, isDone } = todo
        /**
         * onclick을 ondelete(id)로 넘기면 실행과 동시에 불려져서 한번감싸야함
         */
        return (
          <Container key={index}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => onUpdateStatus(todo)}
            />
            <Text>{title}</Text>
            <button onClick={() => onDeleteTodo(id)}>삭제</button>
          </Container>
        )
      })}
    </Container>
  )
}

Body.propTypes = {
  todos: PropTypes.array,
  onDeleteTodo: PropTypes.func,
  onUpdateStatus: PropTypes.func,
}
export default Body
