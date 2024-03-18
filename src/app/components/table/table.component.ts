import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Interface } from 'readline';
import { FormsModule } from '@angular/forms';

export interface ProductTable {
  iconUrl: string;
  productName: string;
  location: string;
  dateTime: string;
  amount: number;
  price: string;
  status: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnChanges {
  @Input() data: ProductTable[] = [];
  @Input() columnName: string[] = [];
  @Output() itemUpdate = new EventEmitter<any>();

  filterData: ProductTable[] = [];
  searchKeyword: string = '';

  iconUrl: string = '';
  productName: string = '';
  location: string = '';
  dateTime: string = '';
  amount: number = 0;
  price: string = '';
  status: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.filterData = this.data;
  }

  onEdit(row: any) {
    this.itemUpdate.emit(row);
  }

  onDelete(row: any) {
    this.itemUpdate.emit(row);
  }

  editItem() {

  }

  sort() {
    console.log('sort');
  }

  addItem() {
    let item:ProductTable =  {
      iconUrl: this.iconUrl,
      productName: this.productName,
      location: this.location,
      dateTime: this.dateTime,
      amount: this.amount,
      price: this.price,
      status: this.status
    }
    console.log('add item', item, this.data);
    this.data.push(item);
    // this.data = [...this.data, item];
    // reset value
    this.iconUrl = '';
    this.productName = '';
    this.location = '';
    this.dateTime = '';
    this.amount = 0;
    this.price = '';
    this.status = '';
  }

  onChangeValueSearch(inputValue: string) {
    console.log('a', this.searchKeyword, inputValue);
    this.filterData = this.data.filter((dataSearch: any) => {
      console.log('b', dataSearch);
      const values = Object.values(dataSearch);
      let flag = false;
      values.forEach((value: any) => {
        if (value.toString().toLowerCase().indexOf(inputValue.toLowerCase()) > -1) {
          flag = true;
        }
      });
      if (flag) {
        return dataSearch;
      }
    });
  }
}


