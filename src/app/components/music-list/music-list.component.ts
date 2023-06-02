import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicServiceService } from 'src/app/services/music-service.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  musics: Music[] = [];

  constructor(private musicService: MusicServiceService){

  }

  ngOnInit() {
    this.musicService.findAll().subscribe(data => {
      this.musics = data;
    });
  }

}
