import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    setWatchListMoviesIds(whatchList: number[]) {
        localStorage.setItem('whatchlist-movies', JSON.stringify(whatchList));
    }

    getWatchListMoviesIds() {
        console.log(localStorage.getItem('whatchlist-movies'));
        return JSON.parse(localStorage.getItem('whatchlist-movies') || '[]');
    }
}
