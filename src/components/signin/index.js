import React, { useState, useEffect } from 'react'
import Form from './form'
import UserList from './user-list'
import Container from '../shared/container'
//node에서는 index란 이름을 제일먼저 찾음

function Signin() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    /**
     * 스테이트값이 비어있으면 mount 직후 한번만실행
     * 로컬스토리지에서 유저를 가져와서 오브젝트로 파싱
     */
    setUsers(JSON.parse(localStorage.getItem('users')))
  }, [])

  useEffect(() => {
    /**
     * users 스테이트 변경시 실행
     * 다시 스트링화 해서 로컬스토리지에 저장
     */
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const handleLoginUser = (userName) => {
    console.log(userName)
    setUsers([...users, userName])
  }
  return (
    <Container padding="100px 20px" maxWidth="720" centered>
      <Form onLogin={handleLoginUser} />
      <UserList users={users} />
    </Container>
  )
}
export default Signin
