import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TableRow } from '../../models/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnChanges {
  @Input() data: TableRow[] = [];
  @Input() columnName: string[] = [];

  @Output() onUpdate = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  filteredData: any[] = [];
  searchBox: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredData = this.data;
  }

  onSearchChange(searchVal: any) {
    this.filteredData = this.data.filter((searchData: any) => {
      const values = Object.values(searchData);
      let flag = false;
      values.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(searchVal) > -1) {
          flag = true;

          return;
        }
      });

      if (flag) {
        return searchData;
      }
    });
  }

  updateItem(item: any) {
    this.onUpdate.emit(item);
  }
  deleteItem(item: any) {
    this.onDelete.emit(item);
  }
}
