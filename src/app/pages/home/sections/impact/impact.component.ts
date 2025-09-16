import { Component } from '@angular/core';
import { SectionsTitleComponent } from "../../../../shared/sections-title/sections-title.component";
import { ImpactCardComponent } from '../../components/impact-card/impact-card.component';

@Component({
  selector: 'app-impact',
  imports: [SectionsTitleComponent, ImpactCardComponent],
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.scss'
})
export class ImpactComponent {
  impactCardsList = [
    {
      id: 1,
      logo: "assets/images/pages/Frame 531.png",
      counter: 20664,
      title: "Mangroves Planted"
    },
    {
      id: 2,
      logo: "assets/images/pages/Frame 532.png",
      counter: 20664,
      title: "Marines Restored"
    },
    {
      id: 3,
      logo: "assets/images/pages/Frame 534.png",
      counter: 20664,
      title: "Carbon Offset"
    }
  ]
}
