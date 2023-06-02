import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { MusicFormComponent } from './components/music-form/music-form.component';
import { ResponseListComponent } from './components/response-list/response-list.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'musics', component: MusicListComponent},
  { path: 'form', component: MusicFormComponent},
  { path: 'results', component: ResponseListComponent},
  { path: 'chart', component: DoughnutChartComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
