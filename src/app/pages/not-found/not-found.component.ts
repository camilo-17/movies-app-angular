import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.less',
})
export class NotFoundComponent {
    constructor(private themeService: ThemeService, private router: Router) {
        themeService.loadTheme();
    }

    navigateToHome() {
        this.router.navigateByUrl('/main');
    }
}
