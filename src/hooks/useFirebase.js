import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const signInUsingPopup = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    


    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    return {
        user,
        signInUsingPopup,
        error,
        setError,
        setUser,
        logOut,
        isLoading,
        setIsLoading,
        auth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword
    }
}
export default useFirebase;