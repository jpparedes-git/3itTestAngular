import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
  chartOptions = {
    title: {
      text: "Music genre voted by internet users"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "ROCK",  y: 33  },
        { label: "POP", y: 65  },
        { label: "KPOP", y: 5  },
        { label: "RAP",  y: 22  },
        { label: "JAZZ",  y: 23  }
      ]
    }]                
  };
}