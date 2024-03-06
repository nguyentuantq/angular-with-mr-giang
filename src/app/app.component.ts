import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from './components/heading/heading.component';
import { ChartComponent } from './components/chart/chart.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeadingComponent, ChartComponent, CardComponent, CommonModule],
})
export class AppComponent {
  title = 'dashboard-admin';

  cardList = [
    {
      title: "title 1",
      number: "1000",
      iconUrl: "../assets/icons/user-icon.png",
      trendingIconUrl: "../assets/icons/ic-trending-up.png",
      trendingValue: "80",
      description: "Up from yesterday"
    },
    {
      title: "title 2",
      number: "1000",
      iconUrl: "../assets/icons/user-icon.png",
      trendingIconUrl: "../assets/icons/ic-trending-down.png",
      trendingValue: "80",
      description: "Up from yesterday"
    },
    {
      title: "title 3",
      number: "1000",
      iconUrl: "../assets/icons/user-icon.png",
      trendingIconUrl: "../assets/icons/ic-trending-up.png",
      trendingValue: "80",
      description: "Up from yesterday"
    },
    {
      title: "title 4",
      number: "1000",
      iconUrl: "../assets/icons/user-icon.png",
      trendingIconUrl: "../assets/icons/ic-trending-down.png",
      trendingValue: "80",
      description: "Up from yesterday"
    }
  ]
}
