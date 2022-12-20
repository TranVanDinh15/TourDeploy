import { onAuthStateChanged, reload } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../FireBase/config";
 export const context=createContext()
function AuthProvider({children}) {
    const [user, setUser]=useState('')
    const history=useNavigate()
    useEffect(()=>{
        const unsubscrible=onAuthStateChanged(auth,  (user)=>{
            console.log(user)
            if(user){
                const {displayName, email, photoURL, uid}=user
                setUser({
                    displayName, email, photoURL, uid
                })
               
                history('/')
                
            }
            // else{
            // }
            return ()=>{
                unsubscrible()
            }
        })
    },[])
    return (
        <context.Provider value={user}>
            {children}
        </context.Provider>
    );
}

export default AuthProvider;