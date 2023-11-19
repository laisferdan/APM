import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnChanges {
  @Input() public rating: number = 0;
  @Output() public ratingClicked: EventEmitter<string> = new EventEmitter();

  public cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

  public onClick():void {
     this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
