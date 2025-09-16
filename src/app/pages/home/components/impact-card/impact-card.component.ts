import { AfterViewInit, Component, Input, signal } from '@angular/core';
import { ImpactCardTemplate } from '../../../../cores/interfaces/impact-card-template';

@Component({
  selector: 'app-impact-card',
  imports: [],
  templateUrl: './impact-card.component.html',
  styleUrl: './impact-card.component.scss'
})
export class ImpactCardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.updateCounter()
  }
  @Input({ required: true }) card!: ImpactCardTemplate;
  cardCounter = signal(0);
  counterIntervalId = setInterval(() => this.updateCounter(), 10)

  updateCounter() {
    this.cardCounter.update(curr => ++curr);
    if (this.cardCounter() <= this.card.counter) {
      this.counterIntervalId;
    } else {
      clearInterval(this.counterIntervalId)
    }
  }

  onDestroy() {
    clearInterval(this.counterIntervalId)
  }
}
