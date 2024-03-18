import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from './components/heading/heading.component';
import { ChartComponent } from './components/chart/chart.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableV2Component } from './components/table-v2/table-v2.component';
import { FormComponent } from './components/form/form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        HeadingComponent,
        ChartComponent,
        CardComponent,
        TableComponent,
        TableV2Component,
        FormComponent,
        CommonModule,

    ]
})
export class AppComponent {
  title = 'dashboard-admin';

  cardList = [
    {
      title: 'title 1',
      number: '1000',
      iconUrl: '../assets/icons/user-icon.png',
      trendingIconUrl: '../assets/icons/ic-trending-up.png',
      trendingValue: '80',
      description: 'Up from yesterday',
    },
    {
      title: 'title 2',
      number: '1000',
      iconUrl: '../assets/icons/user-icon.png',
      trendingIconUrl: '../assets/icons/ic-trending-down.png',
      trendingValue: '80',
      description: 'Up from yesterday',
    },
    {
      title: 'title 3',
      number: '1000',
      iconUrl: '../assets/icons/user-icon.png',
      trendingIconUrl: '../assets/icons/ic-trending-up.png',
      trendingValue: '80',
      description: 'Up from yesterday',
    },
    {
      title: 'title 4',
      number: '1000',
      iconUrl: '../assets/icons/user-icon.png',
      trendingIconUrl: '../assets/icons/ic-trending-down.png',
      trendingValue: '80',
      description: 'Up from yesterday',
    },
  ];

  dataTable = [
    {
      iconUrl: '',
      productName: 'Samsung Galaxy 24 Ultra',
      location: '123, Cầu Giấy, Ha Noi',
      dateTime: '08/03/2024 - 15:30',
      piece: 14,
      amount: '30.990.000 đ',
      status: 'Còn hàng',
    },

    {
      iconUrl: '',
      productName: 'Iphone 15',
      location: '123, Thái Hà, Ha Noi',
      dateTime: '08/03/2024 - 15:30',
      piece: 2,
      amount: '24.990.000 đ',
      status: 'Còn hàng',
    },

    {
      iconUrl: '',
      productName: 'Samsung Galaxy 24 Ultra',
      location: '123, Hoàng Mai, Ha Noi',
      dateTime: '08/03/2024 - 15:30',
      piece: 5,
      amount: '30.990.000 đ',
      status: 'Còn hàng',
    },

    {
      iconUrl: '',
      productName: 'Iphone 15 Pro Max',
      location: '123, Cầu Giấy, Ha Noi',
      dateTime: '08/03/2024 - 15:30',
      piece: 10,
      amount: '27.990.000 đ',
      status: 'Còn hàng',
    },
  ];

  dataColName = [
    'Tên sản phẩm',
    'Cửa hàng',
    'Thời gian nhập kho',
    'Số lượng',
    'Giá tiền',
    'Trạng thái',
  ];

  handleDeleteTable(e: any) {
    const removeIndex = this.dataTable.findIndex((item: any) => item === e);
    this.dataTable.splice(removeIndex, 1);
  }

  handleUpdateTable(e: any) {
    // const index = this.dataTable.indexOf(e);
    // if (index > -1) {
    //   console.log(index);
    // }
  }
}
