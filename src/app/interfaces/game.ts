export interface Game {
    id: number;
    name: string;
    platform: string;
    gender: string;
    imgUrl: string;
    indicativeRating: string;
    releaseDate: Date;
    developer?: {
        id: number;
        name: string;
    };
}