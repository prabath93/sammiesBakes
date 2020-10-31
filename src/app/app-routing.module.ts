import { NgModule } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
    data: {title: 'Home'}
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-page/about-page.module').then(m => m.AboutPageModule),
    data: {title: 'About Us', breadcrumb: 'ABOUT'}
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule),
    data: {title: 'Our Products', breadcrumb: 'PRODUCTS'}
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactsPageModule),
    data: {title: 'Contact Us', breadcrumb: 'CONTACT'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
