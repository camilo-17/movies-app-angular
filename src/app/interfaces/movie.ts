export interface IMovie {
    id: number;
    title: string;
    description: string;
    rating: number;
    duration: string;
    genre: string[];
    releasedDate: string;
    trailerLink: string;
    imgSrc: string;
    isOnWhatchList?: boolean;
}
