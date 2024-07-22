import { HttpClient } from "@/services/HttpClient";
import { MovieDataType } from "@/types/MovieDataTypes";

export default class MovieService {
    static basePath = "/trending/all/day";
    static upComingPath = "/movie/upcoming";
    static onTheAir = "tv/popular";

    static getAll(page: number = 1) {
        return HttpClient.get<any>(this.basePath, page);
    }
    static getUpComing() {
        return HttpClient.get<MovieDataType>(this.upComingPath);
    }
    static getOnTheAir() {
        return HttpClient.get<MovieDataType>(this.onTheAir);
    }
}
