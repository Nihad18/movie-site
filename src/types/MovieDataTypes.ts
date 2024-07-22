export type MovieListData = {
    name: string;
    image: string;
    date: string;
    ageLimit: string;
    languages: { lang: string }[];
};

export type MovieDataType = {
    dates: { maximum: string; minimum: string };
    page: number;
    results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title?: string;
        name?: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }[];
    total_pages: number;
    total_results: number;
};

export type MovieResultType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date?: string;
    first_air_date?: string;
    title?: string;
    name?: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};
