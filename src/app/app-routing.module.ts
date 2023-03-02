import { HomeComponent } from './NewsApp/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskBoardComponent } from './TaskBoard/taskboard.component';

const routes: Routes = [
  { path: 'taskboard', component: TaskBoardComponent },
  {
    path: 'newsapp-home',
    loadChildren: () =>
      import('./NewsApp/news-app.module').then(
        (m) => m.NewsAppModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
