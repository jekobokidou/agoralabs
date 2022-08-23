import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  list = [
    {
      title:"Formation AWS – Cloud Essentials",
      text:"Dans cette formation AWS Cloud Essentials, vous découvrirez les produits, services et solutions communes d’AWS."
    },
    {
      title:"Formation AWS – Ingénierie DEVOPS",
      text:"Lors de cette formation DevOps Engineering on AWS, vous apprendrez les modèles DevOps les plus courants pour développer, déployer et gérer des applications sur la plateforme AWS."
    },
    {
      title:"Formation AWS – Architecture sur AWS",
      text:"Cette formation a pour sujet les fondamentaux de la création d’une infrastructure informatique sur la plateforme AWS"
    },
    {
      title:"Formation DEVOPS – Industrialiser ses builds avec Maven",
      text:"Cette formation vous apportera une réelle maîtrise de la configuration de Maven un standard dans la gestion du cycle de vie des projets."
    },
    {
      title:"Formation DEVOPS – Intégration continue avec Jenkins",
      text:"Cette formation vous présentera toutes les capacités de Jenkins, un serveur d'intégration continue, soutien indispensable au développement en mode Agile."
    },
    {
      title:"Formation DEVOPS – Docker",
      text:"Cette formation officielle est une introduction à la plateforme Docker et vous accompagne à l'installer, l'intégrer et le gérer dans votre infrastructure."
    }
  ];

  ngOnInit(): void {
  }

}
