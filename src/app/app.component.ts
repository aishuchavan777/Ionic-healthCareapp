import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
declare var google;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements AfterViewInit{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  @ViewChild('pieChart') pieChart: ElementRef

  drawChart = () => {

  const data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 10],
    ['Sleep', 7],
    ['exerxise', 2],
    ['other', 5]
    
  ]);

  const options = {
    bar: { groupWidth: '50%' },
    colors: ['red'],
    backgroundColor: '#f4f5f8'
  };

  const chart = new google.visualization.ColumnChart(this.pieChart.nativeElement);

  chart.draw(data, options);

}

ngAfterViewInit() {
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(this.drawChart);
}
  


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
}
