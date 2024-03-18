import { Component, ChangeDetectorRef, Input, AfterViewInit, AfterContentInit  } from '@angular/core';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';

interface PageIndexInterface {
  value: number;
  viewValue: string;
}

@Component({
  standalone: true,
  selector: 'bnh-common-paginator',
  templateUrl: './bnh-common-paginator.component.html',
  styleUrls: ['./bnh-common-paginator.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})

export class BnhCommonPaginatorComponent implements AfterContentInit{
  constructor( private cdref: ChangeDetectorRef ) {}   

  ngOnInit() {
    this.pageTotal = this.length % this.pageSize > 0 ? Math.floor(this.length / this.pageSize) + 1 : Math.floor(this.length / this.pageSize);
  }

  ngAfterContentInit() {
    this.pageIndexOptions = new Array(this.pageTotal).fill(0).map((e,i) => {
      return {value: i, viewValue: (i+1).toString()}
    });
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  pageEvent: PageEvent = new PageEvent;

  @Input() length: number = 50;
  @Input() pageSize: number = 15;
  @Input() hideFirstLastButtons: boolean = false;
  @Input() showCurrentItemsInfo: boolean = false;
  pageIndexOptions :any;

  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  pageTotal = this.length % this.pageSize > 0 ? Math.floor(this.length / this.pageSize) + 1 : Math.floor(this.length / this.pageSize);

  
  
  onSelectEvent(value: number) {
    console.log(this.length, this.pageTotal);
    this.pageIndex = value;
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
