import React  from 'react'
import SignIn from "./SignIn";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-8xl">
            MEDREC
        </h1>
        <h3 className="text-4xl">Your Medical record at one Place</h3>
        <div>
            <SignIn />
        </div>
    </div>
  )
}

export default LandingPage