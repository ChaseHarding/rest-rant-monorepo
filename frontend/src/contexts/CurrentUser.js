import { createContext, useEffect, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        
        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost/3030/authentication/profile')
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser
    }, [])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider