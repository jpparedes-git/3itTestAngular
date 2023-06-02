import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { Response } from 'src/app/models/response';
import { MusicServiceService } from 'src/app/services/music-service.service';
import { ResponseServiceService } from 'src/app/services/response-service.service';

import { Chart, ChartType } from 'chart.js';
import { NgModule } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {
  responses: Response[] = [];
  musics: Music[] = [];
  votes: number[] = [];
  genres: String[] = [];
  currentDate = new Date();
  map = new Map();
  chart : any;
  
  constructor(private responseService: ResponseServiceService,
    private musicService : MusicServiceService){
  }

  ngOnInit() {
    this.responseService.findAll().subscribe(data => {
      this.responses = data;
      this.findMusics();
    });
  }

  findMusics(){
    this.musicService.findAll().subscribe(data => {
      this.musics = data;
      this.countVotesPerMusic();
    });
  }

  async countVotesPerMusic(){
    this.musics.forEach(element => {
      this.responseService.findByMusic(element).subscribe(data => {
        this.map.set(element,data.length);
      });
    });

      await this.delay(1000);
      this.generateChart();
  }

  generateChart(){
    for(let key of this.map.keys()){
      this.genres.push(key.name);
    }

    for (let value of this.map.values()) {
      this.votes.push(value);
  }

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.genres,
	       datasets: [
          {
            label: "Votos",
            data: this.votes,
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:2.5,
        scales: {
          y: {
               type: 'linear',
               grace: '10%'
             }
         }
      }
      
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  } 
}
