import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CarouselModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
