import axios, { AxiosResponse } from "axios";

export class HttpClient {
    static apiToken = import.meta.env.VITE_TMDB_API_TOKEN;
    static baseURL = import.meta.env.VITE_TMDB_BASE_URL;

    static async get<T>(path: string): Promise<AxiosResponse<T>> {
        return axios.get<T>(`${this.baseURL}${path}`, {
            headers: {
                Authorization: `Bearer ${this.apiToken}`,
            },
        });
    }
}
