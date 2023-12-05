import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './pages/main/main.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { CommentsComponent } from './components/comments/comments.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
    declarations: [AppComponent, MainComponent, DetailMovieComponent, CommentsComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NzCarouselModule,
        NzListModule,
        NzAvatarModule,
        NzImageModule,
        NzCommentModule,
        NzRateModule,
        NzLayoutModule,
        NzButtonModule,
        NzIconModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NzInputModule,
        NzGridModule,
        NzResultModule,
        NzSpaceModule,
        NzCardModule,
        FormsModule,

        NzDropDownModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
