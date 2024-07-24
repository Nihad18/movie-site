import UserService from "@/services/UserService";
import { AuthContextType, LoginData } from "@/types/AuthTypes";
import { useContext, createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<Object>(() => {
        const siteToken = localStorage.getItem("site");
        return siteToken ? jwtDecode(siteToken) : {};
    });
    const [token, setToken] = useState<string>(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    const loginAction = async (data: LoginData) => {
        try {
            const response = await UserService.login(data);
            const accessToken = response.data.access_token;
            setToken(accessToken);

            const decodedToken = jwtDecode(accessToken);
            console.log(decodedToken)
            setUser(decodedToken);
            localStorage.setItem("site", response.data.access_token);
            navigate("/");
            return;
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
    
    const logOut = () => {
        setUser({});
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
