import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { SectionsTitleComponent } from "../../../../shared/sections-title/sections-title.component";
import { AboutCardComponent } from "../../components/about-card/about-card.component";

@Component({
  selector: 'app-about',
  imports: [CommonModule, SectionsTitleComponent, AboutCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  cardsData = [
    {
      id: 0,
      title: "Nature Consultancy",
      gif: "assets/images/pages/about-ved-1.mp4",
      vectors: [
        {
          dir: 'top-right',
          vectorSrc: "assets/images/pages/Frame 528.png"
        },
        {
          dir: 'bottom-left',
          vectorSrc: "assets/images/pages/Frame 506.png"
        }
      ],
      logoSrc: 'assets/images/pages/image 1.png',
      content: {
        title: "Nature Consultancy",
        body: "Where cutting-edge technology meets the power of nature.Explore how our latest innovations are helping preserve mangrove forests and restore ecosystems — one digital solution at a time."
      }
    },
    {
      id: 1,
      gif: "assets/images/pages/about-gif-2.gif",
      vectors: [
        {
          dir: 'top-right',
          vectorSrc: "assets/images/pages/Frame 510.png"
        },
        {
          dir: 'top-left',
          vectorSrc: "assets/images/pages/Frame 511.png"
        }
      ],
      logoSrc: 'assets/images/pages/Frame 500.png',
      content: {
        title: "Discover the Future of Sustainability with",
        body: "Where cutting-edge technology meets the power of nature.Explore how our latest innovations are helping preserve mangrove forests and restore ecosystems — one digital solution at a time."
      }
    },
    {
      id: 2,
      title: "Nature Consultancy",
      gif: "assets/images/pages/about-ved-3.mp4",
      vectors: [
        {
          dir: 'top-left',
          vectorSrc: "assets/images/pages/Frame 507.png"
        }
      ],
      logoSrc: 'assets/images/pages/image 1.png',
      content: {
        title: "Nature Consultancy",
        body: "Where cutting-edge technology meets the power of nature.Explore how our latest innovations are helping preserve mangrove forests and restore ecosystems — one digital solution at a time."
      }
    }
  ]
  centerIndex = 0;

  setCenter(index: number) {
    this.centerIndex = index;
  }
}
