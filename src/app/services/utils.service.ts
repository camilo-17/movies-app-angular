import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UtilsService {
    private movies$ = new BehaviorSubject<any>([]);
    currentMovies$ = this.movies$.asObservable();
    constructor() {}

    setMovies(movies: any) {
        this.movies$.next(movies);
    }
}
