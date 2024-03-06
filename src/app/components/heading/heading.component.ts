import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  @Input() content?: string = '';
  @Input() size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';

  public get getSize() {
    return this.size;
  }

}
