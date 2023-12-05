import { Component } from '@angular/core';
import { IMovie } from '../../interfaces/movie';
import { IOrder } from '../../interfaces/order';
import { MOVIES } from '../../data/data';
import { LocalStorageService } from '../../services/local-storage.service';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.less',
})
export class MainComponent {
    selectedOrder?: Event;
    movies: IMovie[] = [];
    cleanMovies: IMovie[] = [];
    showBanner = true;
    whatchListMoviesIds: number[] = [];

    freeSeach: string = '';

    moviesHero = [
        {
            source: '../assets/movies-images/poster3.png',
            title: 'Code Breaker: Lines of Intrigue',
            description:
                'In "Code Breaker: Lines of Intrigue," follow the story of Alex, a brilliant programmer whose mundane life takes a thrilling turn when he accidentally deciphers a mysterious code.',
        },
        {
            source: '../assets/movies-images/poster1.png',
            title: 'Super Man new revenge',
            description:
                "Super Man: New Revenge unfolds a gripping chapter in the Man of Steel's saga. When a formidable new adversary emerges, Superman must tap into untapped powers to counter the looming threat",
        },
        {
            source: '../assets/movies-images/poster2.png',
            title: 'Super Batman',
            description:
                '"Super Batman" is an exhilarating superhero adventure that takes the iconic Dark Knight to unprecedented heights. As Gotham City faces an unprecedented threat, Batman must embrace newfound superpowers to overcome a formidable adversary. In this high-octane tale,',
        },
        {
            source: '../assets/movies-images/poster4.png',
            title: 'Red line the fatal call',
            description:
                '"Red Line" races onto the screen as a high-octane thriller that propels audiences into the heart of a relentless adrenaline-fueled adventure.',
        },
    ];

    orders: IOrder[] = [
        {
            display: 'By default',
            selected: true,
        },
        {
            display: 'Title',
            selected: false,
        },
        {
            display: 'Release date',
            selected: false,
        },
    ];

    constructor(
        private themeService: ThemeService,
        private localStorageService: LocalStorageService,
        private router: Router,
        private us: UtilsService
    ) {
        themeService.loadTheme();
        this.cleanMovies = this.addWatchListMovies();
        this.movies = this.cleanMovies;
    }

    ngOnInit(): void {}

    addWatchListMovies(): IMovie[] {
        this.whatchListMoviesIds = this.localStorageService.getWatchListMoviesIds();
        if (this.whatchListMoviesIds.length === 0) {
            return MOVIES.map((movie: IMovie) => ({ ...movie, isOnWhatchList: false }));
        }
        return MOVIES.map((movie: IMovie) => ({ ...movie, isOnWhatchList: this.whatchListMoviesIds.includes(movie.id) }));
    }

    toggleTheme(): void {
        this.themeService.toggleTheme().then();
    }

    saveMovieToWhatchList($event: Event, movie: IMovie) {
        $event.stopPropagation();
        this.whatchListMoviesIds.push(movie.id);
        this.localStorageService.setWatchListMoviesIds(this.whatchListMoviesIds);
    }

    handleOrderChanged(indexSelected: number) {
        this.orders.map((element, index) => {
            element.selected = indexSelected === index;
        });
        this.movies = this.sortMovies(this.movies, indexSelected);
    }

    elementSelected() {
        return this.orders.find((element) => element.selected)?.display || '';
    }

    onChangeSearchInput(word: string) {
        if (word === '') {
            this.showBanner = true;
            this.movies = this.cleanMovies;
            return;
        }
        this.showBanner = false;
        this.movies = this.cleanMovies.filter((movie) => movie.title.toLowerCase().includes(word.toLowerCase()));
    }

    gotToDetailPage(movie: IMovie) {
        this.setProductInService();
        this.router.navigate(['/detail-movie', movie.id]);
    }

    setProductInService() {
        this.us.setMovies(this.movies);
    }

    sortMovies(movies: IMovie[], indexSelected: number) {
        const key = this.orders[indexSelected].display;
        const keyMoviesArray = key == this.orders[1].display ? 'title' : 'releasedDate';
        if (key === this.orders[0].display) {
            return this.cleanMovies;
        }
        return movies.slice().sort((a: any, b: any) => {
            const valueA = a[keyMoviesArray];
            const valueB = b[keyMoviesArray];
            if (key === this.orders[2].display) {
                const dateA = new Date(valueA).getTime();
                const dateB = new Date(valueB).getTime();
                return dateA - dateB;
            } else {
                return valueA.localeCompare(valueB);
            }
        });
    }
}
