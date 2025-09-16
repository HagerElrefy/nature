import { Component } from '@angular/core';
import { MarqueeComponent } from "../../components/marquee/marquee.component";
import { CommonModule } from '@angular/common';
import { SectionsTitleComponent } from "../../../../shared/sections-title/sections-title.component";

@Component({
  selector: 'app-meet-our',
  imports: [CommonModule, SectionsTitleComponent],
  templateUrl: './meet-our.component.html',
  styleUrl: './meet-our.component.scss'
})
export class MeetOurComponent {
  companies = [
    'assets/images/pages/companies/Frame 595.png',
    'assets/images/pages/companies/Frame 596.png',
    'assets/images/pages/companies/Frame 597.png',
    'assets/images/pages/companies/OUR.png',
    'assets/images/pages/companies/Frame 598.png',
    'assets/images/pages/companies/Frame 599.png'
  ]
}
