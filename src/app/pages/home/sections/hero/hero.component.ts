import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlSectionsDispalyInHomeService } from '../../../../cores/services/control-sections-dispaly-in-home.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(public handleShowAllSections: ControlSectionsDispalyInHomeService) { }
  // @Output() showAllSections = new EventEmitter<boolean>();

  // isOverlaped = false;
  overlap() {
    this.handleShowAllSections.setGreenBTNFlag();
    // console.log("active");
    // this.isOverlaped = true;
    // this.showAllSections.emit(true)
  }
}
