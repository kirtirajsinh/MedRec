import React, {useContext} from 'react'
import {AuthContext} from "../authContext"

const Nav = () => {
const {signout} = useContext(AuthContext);
  return (
    <div>
        <div className='flex flex-row justify-between p-2 bg-teal-300'>
            <h3 className='text-2xl font-normal text-white'>MedRec</h3>
            <button onClick={signout} className='btn border border-white rounded p-2'>SignOut</button>
        </div>
    </div>
  )
}

export default Nav