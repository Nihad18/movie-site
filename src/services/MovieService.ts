import { HttpClient } from "@/services/HttpClient";
import { FilmDataType } from "@/types/filmDataTypes";

export default class MovieService {
    static basePath = "/trending/all/day";
    static upComingPath = "/movie/upcoming";
    static onTheAir = "tv/popular";

    static getAll(page: number = 1) {
        return HttpClient.get<any>(this.basePath, page);
    }
    static getUpComing() {
        return HttpClient.get<FilmDataType>(this.upComingPath);
    }
    static getOnTheAir() {
        return HttpClient.get<FilmDataType>(this.onTheAir);
    }
}
