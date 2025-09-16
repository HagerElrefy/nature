import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects-container',
  imports: [CommonModule],
  templateUrl: './projects-container.component.html',
  styleUrl: './projects-container.component.scss'
})
export class ProjectsContainerComponent {
  projects = [
    {
      id: 1,
      title: "Lake Bardawil",
      imgaeSrc: "assets/images/pages/projects/Frame 452.png",
      theme: "green",
      content: "Joint ecosystem monitoring of coral-mangrove transition zones to guide coastal tourism development sustainably."
    },
    {
      id: 2,
      title: "Ras Gharib Coastal",
      imgaeSrc: "assets/images/pages/projects/Frame 453.png",
      theme: "blue",
      content: "Joint ecosystem monitoring of coral-mangrove transition zones to guide coastal tourism development sustainably."
    },
    {
      id: 3,
      title: "Wadi El Natrun Soil",
      imgaeSrc: "assets/images/pages/projects/Frame 454.png",
      theme: "perpule",
      content: "Joint ecosystem monitoring of coral-mangrove transition zones to guide coastal tourism development sustainably."
    },
    {
      id: 4,
      title: "Nile Delta",
      imgaeSrc: "assets/images/pages/projects/Frame 453.png",
      theme: "blue",
      content: "Joint ecosystem monitoring of coral-mangrove transition zones to guide coastal tourism development sustainably."
    },
    {
      id: 5,
      title: "Jubail Island",
      imgaeSrc: "assets/images/pages/projects/Frame 453.png",
      theme: "blue",
      content: "Joint ecosystem monitoring of coral-mangrove transition zones to guide coastal tourism development sustainably."
    },
    {
      id: 6,
      title: "Marsa Alam Coral",
      imgaeSrc: "assets/images/pages/projects/Frame 454.png",
      theme: "green",
      content: "Joint ecosystem monitoring of coral-mangrove transition zones to guide coastal tourism development sustainably."
    },
  ];
  showcontent = signal<boolean>(false);
  currSelectedProject = signal<number | null>(null);
  togglecontentVisability(id: number) {
    this.showcontent.set(this.currSelectedProject() === id ? false : true);
    this.currSelectedProject.update(curr => curr && id === curr ? null : id)
    console.log(this.showcontent(), this.currSelectedProject())
  }
}
