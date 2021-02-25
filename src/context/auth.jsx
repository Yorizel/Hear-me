import React, {useEffect, useCallback, useState} from 'react'

export const AuthContext = React.createContext({auth: {token: '', isLogged: false}, setAuth: () => {}})

export default function AuthProvider({children}){
    const [auth, setAuth] = useState({
        token: '',
        isLogged: false,
    })
    
    const get_user_token = useCallback(async () => {
        const user_token = await sessionStorage.getItem('token')
       if(user_token){
          return  setAuth({token: user_token, isLogged: true})
       }
    },[])
    
    const set_user_token = useCallback(async (token = '') => {
         await sessionStorage.setItem('token', token)
    },[])
    
    useEffect(() => {
        get_user_token()
    }, [get_user_token])
    useEffect(() => {
        set_user_token(auth.token)
    },[auth, set_user_token])
    
    return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>
    
    
}