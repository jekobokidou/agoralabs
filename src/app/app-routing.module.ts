import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Homepage' } },
  /*
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-v2/home-v2.module').then(m => m.HomeV2Module), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v3', loadChildren: () => import('./components/pages/home-v3/home-v3.module').then(m => m.HomeV3Module), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v4', loadChildren: () => import('./components/pages/home-v4/home-v4.module').then(m => m.HomeV4Module), data: { breadcrumb: 'Homepage' } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  // Services
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: 'Services' } },
  { path: 'service-details', loadChildren: () => import('./components/pages/service-details/service-details.module').then(m => m.ServiceDetailsModule), data: { breadcrumb: 'Service Details' } },
  */
  // New Services
  { path: 'cloud', loadChildren: () => import('./components/pages/cloud/cloud.module').then(m => m.CloudModule), data: { breadcrumb: 'Cloud' } },
  { path: 'conseil', loadChildren: () => import('./components/pages/conseil/conseil.module').then(m => m.ConseilModule), data: { breadcrumb: 'Conseil' } },
  { path: 'formations', loadChildren: () => import('./components/pages/formations/formations.module').then(m => m.FormationsModule), data: { breadcrumb: 'Formations' } },

  { path: 'download-catalog', loadChildren: () => import('./components/pages/download/download.module').then(m => m.DownloadModule), data: { breadcrumb: 'Téléchargements' } },

  //Routes tests pour anchor
  
  { path: 'catalogueformations', redirectTo: '/assets/docs/Agoralabs_Catalogue_De_Formation.pdf' },
  //{ path: 'elearning', loadChildren: () => import('./components/pages/home/introvideo/introvideo.component') },
  /*
  { path: 'prestations', redirectTo: '/#prestations' },
  { path: 'elearning', redirectTo: '/#elearning' },
  { path: 'references', redirectTo: '/#references' },
  { path: 'equipe', redirectTo: '/#equipe' },
  { path: 'actualites', redirectTo: '/#actualites' },
  { path: 'contact', redirectTo: '/#contact' },
  */
  // Pages
  /*
  { path: 'case-study', loadChildren: () => import('./components/pages/case-study/case-study.module').then(m => m.CaseStudyModule), data: { breadcrumb: 'Case Study' } },
  { path: 'case-details/:id', loadChildren: () => import('./components/pages/case-details/case-details.module').then(m => m.CaseDetailsModule), data: { breadcrumb: 'Case Details' } },
  { path: 'comingsoon', loadChildren: () => import('./components/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule), data: { breadcrumb: 'Coming Soon' } },
  { path: 'error', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Error 404' } },
  { path: 'faq', loadChildren: () => import('./components/pages/faq/faq.module').then(m => m.FaqModule), data: { breadcrumb: "FAQ's" } },
  { path: 'pricing', loadChildren: () => import('./components/pages/pricing/pricing.module').then(m => m.PricingModule), data: { breadcrumb: 'Pricing' } },
  
  { path: 'shop/cat/:catId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  { path: 'shop/tag/:tagId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  
  { path: 'shop', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  { path: 'shop-details/:id', loadChildren: () => import('./components/pages/shop-details/shop-details.module').then(m => m.ShopDetailsModule), data: { breadcrumb: 'Shop Details' } },
  { path: 'team', loadChildren: () => import('./components/pages/team/team.module').then(m => m.TeamModule), data: { breadcrumb: 'Team' } },
  { path: 'team-details/:id', loadChildren: () => import('./components/pages/team-details/team-details.module').then(m => m.TeamDetailsModule), data: { breadcrumb: 'Team Details' } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  
  { path: 'blog-grid', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  //{ path: 'actualites', loadChildren: () => import('./components/pages/actualites/actualites.module').then(m => m.ActualitesModule), data: { breadcrumb: 'Actualites' } },


  { path: 'blog-standard', loadChildren: () => import('./components/pages/blog-standard/blog-standard.module').then(m => m.BlogStandardModule), data: { breadcrumb: 'Blog Standard' } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: 'Blog Details' } },
  */
  // Contact
  //{ path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contactez-nous' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
