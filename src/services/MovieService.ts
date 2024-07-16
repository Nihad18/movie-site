import { HttpClient } from "@/services/HttpClient";
import { FilmDataType } from "@/types/filmDataTypes";

export default class MovieService {
    static basePath = "/trending/all/day";
    static upComingPath = "/movie/upcoming";
    static onTheAir = "tv/popular";

    static getAll() {
        return HttpClient.get<any>(this.basePath);
    }
    static getUpComing() {
        return HttpClient.get<FilmDataType>(this.upComingPath);
    }
    static getOnTheAir() {
        return HttpClient.get<FilmDataType>(this.onTheAir);
    }
}
