import React, {useContext} from 'react'
import {AuthContext} from "../authContext"

const SignIn = () => {
  const {signin} = useContext(AuthContext);
  return (
    <div>
        <button className="border border-black bg-purple-800 rounded-full p-3 text-white shadow-md shadow-purple-200" onClick={signin}>Sign In</button>
    </div>
  )
}

export default SignIn

