import React from 'react'
import axios from '../api/auth.api'
import GoogleLogin from 'react-google-login'

const Google = ({ takeAction }) => {
  const responseGoogle = async (response) => {
    // console.log(response.tokenId)
    try {
      const result = await axios.post('/users/auth/google', {
        idToken: response.tokenId,
      })
      takeAction(result)
      // console.log('google success', result)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Google
