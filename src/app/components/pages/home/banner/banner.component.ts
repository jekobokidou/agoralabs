import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  banner = [
    {
      img: "assets/images/banner-01.jpg",
      subtitle: "Cloud",
      title: "L'expertise au service <br>du numérique",
      text: "Moderniser, migrer, déployer et opérer des applications dans le cloud."
    },
    {
      img: "assets/images/banner-02.jpg",
      subtitle: "Conseil",
      title: "L'expertise au service <br>du numérique",
      text: "Accompagner la conduite du changement pour les projets de transformation numérique."
    },
    {
      img: "assets/images/banner-03.jpg",
      subtitle: "Formations",
      title: "L'expertise au service <br>du numérique",
      text: "Transmettre des connaissances solides sur les technologies Cloud et DevOps"
    }
  ];
  settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          arrows: false
        }
      }
    ]
  };

  ngOnInit(): void {
  }

}
