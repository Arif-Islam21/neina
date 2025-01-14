import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Authentication/firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxiosCommon from "../hooks/useAxiosCommon";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const AxiosCommon = useAxiosCommon();

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        console.log(currentUser.email);
        await AxiosCommon.post("/jwt", { email: currentUser.email }).then(
          (data) => {
            if (data.data) {
              localStorage.setItem("accessToken", data?.data?.token);
              setLoading(false);
            }
          }
        );
        setLoading(false);
      } else {
        setUser(null);
        localStorage.removeItem("accessToken");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const authInfo = {
    registerUser,
    loginUser,
    logOut,
    user,
    loading,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
