import { Component } from '@angular/core';
import { BnhCommonPaginatorComponent } from '../bnh-common-paginator/bnh-common-paginator.component';
import {MatInputModule} from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  imports: [
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    BnhCommonPaginatorComponent
  ],
})

export class PaginatorComponent {
  
}
