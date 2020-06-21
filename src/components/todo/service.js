const BASE_URL = 'http://localhost:8000/todo'

/**
 * default: GET
 * todo 목록을 가져온다
 */

export async function fetchTodos() {
  const response = await fetch(BASE_URL) // 순차보장
  if (!response.ok) {
    return []
  }
  return response.json()
}

/**
 * POST
 * TODO 추가
 */

export async function postTodos(todo) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  })
  return response.ok
}
/**
 * PUT
 * TODO 상태 업데이트
 */

export async function updateTodo(todo) {
  const response = await fetch(`${BASE_URL}/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  })
  return response.ok
}
/**
 * DELETE
 * TODO 삭제
 */

export async function deleteTodo(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  return response.ok
}
