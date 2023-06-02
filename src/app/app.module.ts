import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './services/user-service.service';
import { MusicListComponent } from './components/music-list/music-list.component';
import { MusicFormComponent } from './components/music-form/music-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponseListComponent } from './components/response-list/response-list.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgChartsModule } from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    MusicListComponent,
    MusicFormComponent,
    ResponseListComponent,
    DoughnutChartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    CanvasJSAngularChartsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
