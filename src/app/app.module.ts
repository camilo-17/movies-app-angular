import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './pages/main/main.component';

@NgModule({
    declarations: [AppComponent, MainComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NzCarouselModule,
        NzLayoutModule,
        NzButtonModule,
        NzIconModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NzInputModule,
        NzGridModule,
        NzSpaceModule,
        FormsModule,
        NzDropDownModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
