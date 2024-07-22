import axios, { AxiosResponse } from "axios";

export class HttpClient {
    static apiToken = import.meta.env.VITE_TMDB_API_TOKEN;
    static baseURL = import.meta.env.VITE_TMDB_BASE_URL;
    static URL = import.meta.env.VITE_TMDB_URL;
    static async get<T>(path: string, page: number = 1): Promise<AxiosResponse<T>> {
        return axios.get<T>(`${this.baseURL}${path}?page=${page}`, {
            headers: {
                Authorization: `Bearer ${this.apiToken}`,
            },
        });
    }
    static async post<T>(path: string, data: T): Promise<AxiosResponse<T>> {
        return axios.post<T>(`${URL}${path}`, data);
    }
}
