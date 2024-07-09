import { HttpClient } from "@/services/HttpClient";

export default class MovieService {
    static basePath='/trending/all/day'
    static getAll() {
        return HttpClient.get<any>(this.basePath);
    }
}