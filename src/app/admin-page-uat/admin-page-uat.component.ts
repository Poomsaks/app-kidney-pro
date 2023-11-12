import { Component, OnInit } from '@angular/core';
import { MainServiceProService } from '../main-service/main-service-pro.service';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-admin-page-uat',
  templateUrl: './admin-page-uat.component.html',
  styleUrls: ['./admin-page-uat.component.css']
})
export class AdminPageUatComponent implements OnInit {

  chartBarData: any;
  chartPieData: any;
  chartPie_Data: any;
  count1!: number;
  count2!: number;
  count3!: number;
  count4!: number;
  count5!: number;
  total!: number;
  average!: number;
  jsonData!: any[];
  itemsPerPage = 10; // จำนวนรายการต่อหน้า
  currentPage = 1; // หน้าปัจจุบัน
  totalPages!: number;

  chartPieOptions: any = {
    cutoutPercentage: 70,
    legend: {
      position: 'left',
      labels: {
        pointStyle: 'circle',
        usePointStyle: true
      }
    }
  };


  constructor(private _serviceService: MainServiceProService,
    private http: HttpClient) {
    // Define your chart data (chartBar_Data) here
    this.chartBarData = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 20, 30],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    };

    this._serviceService.get_data_admin().subscribe((response: any) => {
      console.log(response.result);
      const responseData = response.result.response[0];
      this.count1 = responseData.count_1;
      this.count2 = responseData.count_2;
      this.count3 = responseData.count_3;
      this.count4 = responseData.count_4;
      this.count5 = responseData.count_5;
      this.total = responseData.total;

      this.chartPieData = {
        labels: ['ระยะที่1', 'ระยะที่2','ระยะที่3','ระยะที่4','ระยะที่5'],
        datasets: [
          {
            label: 'Count of Votes',
            data: [this.count1, this.count2, this.count3, this.count4, this.count5],
            backgroundColor: ['rgba(26, 188, 156)', 'rgba(255, 195, 0)', 'rgba(52, 152, 219)','rgba(88, 214, 141)','rgba(255, 87, 51)']
          }
        ]
      };

      const chartPie = document.getElementById('chartPie') as HTMLCanvasElement;
      if (chartPie) {
        new Chart(chartPie, {
          type: 'doughnut',
          data: this.chartPieData, // Use the Pie Chart data
          options: this.chartPieOptions
        });
      }

      });

  }
  ngOnInit() {
    this._serviceService.get_profile().subscribe((response: any) => {
      // console.log(response.result.response);
      this.jsonData = response.result.response;
    });
  }
  ngAfterViewInit() {
    const chartBar = document.getElementById('chartBar') as HTMLCanvasElement;
    if (chartBar) {
      new Chart(chartBar, {
        type: 'bar',
        data: this.chartBarData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }


  }
 setPage(page: number) {
    this.currentPage = page;
  }
  getPages(): number[] {
    const totalItems = this.jsonData.length;
    this.totalPages = Math.ceil(totalItems / this.itemsPerPage);
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

}
