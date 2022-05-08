import React from 'react'
import { createContext, useState, useEffect, useContext } from "react";
import {signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'
import {auth, provider} from "./firebase"

export const AuthContext = createContext();
const useAuth = () => {
    return useContext(AuthContext);
  };
const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signin = () =>{
     return signInWithPopup(auth,provider)
  .then((result) =>{
    console.log(result);
    const user = result.user
    setCurrentUser(user)

  }).catch((error) =>{
    console.log(error);
  })
    } 

    const signout = () =>{
    return signOut(auth)
  .then(() =>{
    setCurrentUser(null)
  }).catch((error) =>{
    console.log(error)
  })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) setCurrentUser(user);
          else setCurrentUser(false);
        });
        return () => unsubscribe();
      }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;