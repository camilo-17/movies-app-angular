import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
export const importsStandAloneComponent = [
    CommonModule,
    NzCarouselModule,
    NzLayoutModule,
    RouterOutlet,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzGridModule,
    NzSpaceModule,
    NzDropDownModule,
];
