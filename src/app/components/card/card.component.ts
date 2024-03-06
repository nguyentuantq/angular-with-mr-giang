import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardName:String = '';
  @Input() cardNumber:String = '';
  @Input() cardIconUrl:String = '';
  @Input() trendingIconUrl:String = '';
  @Input() trendingValue:String = '';
  @Input() shortDescription:String = '';
}
