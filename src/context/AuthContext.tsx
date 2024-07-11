import { AuthContextType, LoginData } from "@/types";
import { useContext, createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";


type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<string>("");
    const [token, setToken] = useState<string>(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    // const loginAction = async (data: LoginData) => {

    //     try {
    //         const response = await fetch("/api/auth/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         });
    //         const res = await response.json();
    //         if (res.data) {
    //             setUser(res.data.user);
    //             setToken(res.token);
    //             localStorage.setItem("site", res.token);
    //             navigate("/");
    //             return;
    //         }
    //         throw new Error(res.message);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
    const loginAction = async (data: LoginData) => {
        if (data) {
            setUser(data.email);
            setToken(data.password);
            localStorage.setItem("site", data.email);
            navigate("/");
            return;
        }
    }
    const logOut = () => {
        setUser("");
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
