import React, { useState, useEffect } from 'react'

import Container from '../shared/container'
import Header from './header'
import Body from './body'
import Footer from './footer'
import { fetchTodos, deleteTodo, postTodos, updateTodo } from './service'
import { FILTERS } from './constants'
function Todo() {
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filter, setFilter] = useState(FILTERS[0])
  useEffect(() => {
    //useeffect에 async가 지원이 안되서 꼼수로 안에서 만들어서씀
    handleRefreshTodos()
  }, [])

  //useEffect: 파라미터가 변하는걸 감시하는 함수, 아무것도 없으면 첫진입시체크
  useEffect(() => {
    switch (filter) {
      case FILTERS[0]: {
        return setFilteredTodos([...todos])
      }
      case FILTERS[1]: {
        return setFilteredTodos(todos.filter((todo) => !todo.isDone))
      }
      case FILTERS[2]: {
        return setFilteredTodos(todos.filter((todo) => todo.isDone))
      }
    }
  }, [filter, todos])

  const handleRefreshTodos = async () => {
    setTodos(await fetchTodos())
  }
  const handleAddTodo = async (title) => {
    const todo = {
      title,
      isDone: false,
    }
    const isAdded = await postTodos(todo)
    if (isAdded) {
      handleRefreshTodos()
    } else {
      window.alert('실패')
    }
  }
  const handleDeleteTodo = async (id) => {
    const isDeleted = await deleteTodo(id)
    if (isDeleted) {
      window.alert('삭제됨')
      handleRefreshTodos()
    } else {
      window.alert('삭제실패')
    }
  }

  const handleUpdateStatus = async (todo) => {
    const isUpdated = await updateTodo({ ...todo, isDone: !todo.isDone })
    if (isUpdated) {
      handleRefreshTodos()
    }
  }
  return (
    <Container>
      <Header onAddTodo={handleAddTodo} />
      <Body
        todos={filteredTodos}
        onDeleteTodo={handleDeleteTodo}
        onUpdateStatus={handleUpdateStatus}
      />
      <Footer
        count={filteredTodos.length}
        filter={filter}
        onChangeFilter={setFilter}
      />
    </Container>
  )
}

export default Todo
