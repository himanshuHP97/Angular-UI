import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core/core.module';
import { NewsAppRoutingModule } from './news-routing.module';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    NewsAppRoutingModule
  ]
})
export class NewsAppModule { }
