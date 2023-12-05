import { Component } from '@angular/core';
import { formatDistance, addDays } from 'date-fns';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrl: './comments.component.less',
})
export class CommentsComponent {
    data = [
        {
            author: 'Hector Douglas',
            avatar: 'https://gravatar.com/avatar/032ecc9bbc3e9858795a39b040f24dd4?s=400&d=robohash&r=x',
            content:
                'swings effortlessly into a league of its own, delivering a visually stunning and emotionally resonant superhero experience. The animation is a masterpiece, seamlessly blending various art styles that mirror the comic book origins while dazzling the audience with vibrant colors and dynamic action sequences.',
            datetime: formatDistance(new Date(), addDays(new Date(), 1)),
        },
        {
            author: 'Catia Lima',
            avatar: 'https://gravatar.com/avatar/faa4bbaa1a87597f75297a9e2d2cf23e?s=400&d=robohash&r=x',
            content:
                'The film strikes a perfect balance between heart and humor, making it enjoyable for audiences of all ages. Miles Morales, the central character, undergoes a compelling coming-of-age journey, and the soundtrack, featuring an eclectic mix of music, complements the film is energetic pace',
            datetime: formatDistance(new Date(), addDays(new Date(), 2)),
        },
    ];

    likes = 0;
    dislikes = 0;
    time = formatDistance(new Date(), new Date());

    like(): void {
        this.likes = 1;
        this.dislikes = 0;
    }

    dislike(): void {
        this.likes = 0;
        this.dislikes = 1;
    }
}
