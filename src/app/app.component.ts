import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { movies } from './data/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {
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
    hGutter = 20;
    vGutter = 20;
    count = 4;
    movies: any = movies;
    constructor(private themeService: ThemeService) {
        themeService.loadTheme();
    }

    toggleTheme(): void {
        this.themeService.toggleTheme().then();
    }
}
