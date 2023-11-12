import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-page-pro',
  templateUrl: './report-page-pro.component.html',
  styleUrls: ['./report-page-pro.component.css']
})
export class ReportPageProComponent implements OnInit {

  dataFromTestComponent!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }
  age!: any;
  weight!: any;
  height!: any;
  bpd!: any;
  bps!: any;
  fever!: any;
  cough!: any;
  sore_throat!: any;
  phlegm!: any;
  headache!: any;
  covid!: any;
  vomit!: any;
  feverish!: any;
  responseValue!: any;
  responseValue_2!: any;

  name!: any;
  phone!: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // this.dataFromTestComponent = params['data'];
      this.dataFromTestComponent = JSON.parse(params['data']);
      console.log(this.dataFromTestComponent);
      for (const [key, value] of Object.entries(this.dataFromTestComponent)) {
        if (key === 'age') {
          this.age = value
        }
        if (key === 'weight') {
          this.weight = value
        }
        if (key === 'height') {
          this.height = value
        }
        if (key === 'bpd') {
          this.bpd = value
        }
        if (key === 'bps') {
          this.bps = value
        }
        if (key === 'fever') {
          this.fever = value
        }
        if (key === 'cough') {
          this.cough = value
        }
        if (key === 'sore_throat') {
          this.sore_throat = value
        }
        if (key === 'phlegm') {
          this.phlegm = value
        }
        if (key === 'headache') {
          this.headache = value
        }
        if (key === 'covid') {
          this.covid = value
        }
        if (key === 'vomit') {
          this.vomit = value
        }
        if (key === 'feverish') {
          this.feverish = value
        }
        if (key === 'responseValue') {
          this.responseValue = value
        }
        if (key === 'responseValue_2') {
          this.responseValue_2 = value
        }
        if (key === 'name') {
          this.name = value
        }
        if (key === 'phone') {
          this.phone = value
        }
      }
    });
  }

  printPage() {
    window.print();
  }
}
