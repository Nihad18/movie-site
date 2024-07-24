import { HttpClient } from "@/services/HttpClient";
import { LoginData, RegisterData } from "@/types/AuthTypes";

export default class UserService {
    static loginURL = "/users/login";
    static registerURL = "/users/register";

    static async login(data: LoginData): Promise<any> {
        try {
            const response = await HttpClient.post<any>(this.loginURL, data);
            return response.data;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }

    static async register(data: RegisterData): Promise<any> {
        try {
            const response = await HttpClient.post<any>(this.registerURL, data);
            return response.data;
        } catch (error) {
            console.error("Error during registration:", error);
            throw error;
        }
    }
}
