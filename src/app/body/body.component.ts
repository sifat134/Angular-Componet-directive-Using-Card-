import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
@Component({
  selector: 'body',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
