import React from 'react'
import { Button } from 'antd'
import { revokeAll } from '../helpers'

const Portal = ({ history }) => {
  const revoke = () => {
    revokeAll(() => {
      history.push('/login')
    })
  }
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Protected Route</h1>
      <Button onClick={revoke}>Log Out</Button>
    </div>
  )
}

export default Portal
