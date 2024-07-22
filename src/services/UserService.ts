import { HttpClient } from "@/services/HttpClient";
import { LoginData, RegisterData } from "@/types/AuthTypes";

export default class UserService {
    static loginURL = "/v1/api/login";
    static registerURL = "/v1/api/register";

    static login(data: LoginData) {
        return HttpClient.post<any>(this.loginURL, data);
    }
    static register(data: RegisterData) {
        return HttpClient.post<any>(this.registerURL, data);
    }
}
