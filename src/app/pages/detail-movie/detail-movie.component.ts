import { AfterViewInit, Component } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { IMovie } from '../../interfaces/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'app-detail-movie',
    templateUrl: './detail-movie.component.html',
    styleUrl: './detail-movie.component.less',
})
export class DetailMovieComponent {
    movies: IMovie[] = [];
    trailerLinkSafe: SafeUrl | any;
    selectedMovie!: IMovie | any;
    moviesInWhatchList: number[];

    constructor(
        private us: UtilsService,
        private route: ActivatedRoute,
        protected _sanitizer: DomSanitizer,
        private ls: LocalStorageService,
        private router: Router
    ) {
        us.currentMovies$.subscribe((movies) => {
            if (movies.length === 0) {
                this.router.navigateByUrl('/main');
            }
            this.movies = movies;
            const idMovie: number = Number(this.route.snapshot.paramMap.get('id')) || 0;
            this.selectedMovie = this.movies.find((movie: IMovie) => movie.id === idMovie);
            this.trailerLinkSafe = this._sanitizer.bypassSecurityTrustResourceUrl(this.selectedMovie.trailerLink);
        });
        this.moviesInWhatchList = ls.getWatchListMoviesIds();
    }

    toogleWatchList() {
        if (this.moviesInWhatchList.includes(this.selectedMovie.id)) {
            this.moviesInWhatchList = this.moviesInWhatchList.filter((movieId: number) => movieId !== this.selectedMovie.id);
        } else {
            this.moviesInWhatchList.push(this.selectedMovie.id);
        }
        this.ls.setWatchListMoviesIds(this.moviesInWhatchList);
    }

    backTolist() {
        this.router.navigateByUrl('/main');
    }
}
