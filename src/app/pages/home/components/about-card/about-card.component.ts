import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AboutCardTemplate } from '../../../../cores/interfaces/about-card-template';
import { CommonModule } from '@angular/common';
import { JumpInButtonComponent } from "../jump-in-button/jump-in-button.component";

@Component({
  selector: 'app-about-card',
  imports: [CommonModule, JumpInButtonComponent],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {

  @Input() card!: AboutCardTemplate;
  @Input() otherInfo!: { cardIndex: number; numOfCards: number };
  @Input() centerIndex!: number;
  @Output() select = new EventEmitter<number>();

  getPositionClass(): string {
    const n = this.otherInfo.numOfCards;
    const leftIndex = (this.centerIndex - 1 + n) % n;
    const rightIndex = (this.centerIndex + 1) % n;

    if (this.otherInfo.cardIndex === this.centerIndex) return 'center';
    if (this.otherInfo.cardIndex === leftIndex) return 'left';
    if (this.otherInfo.cardIndex === rightIndex) return 'right';
    return 'hidden';
  }

  handleSelectCard() {
    this.select.emit(this.otherInfo.cardIndex);
  }
}
