import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { MainServiceProService } from '../main-service/main-service-pro.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-pro',
  templateUrl: './home-page-pro.component.html',
  styleUrls: ['./home-page-pro.component.css']
})
export class HomePageProComponent {

  constructor(
    private _serviceService: MainServiceProService,
    private http: HttpClient,
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) { }
  activeSlideIndex: number = 0;
  ngOnInit() {
    this.hide_selectHeader();
    this._serviceService.authenticate().subscribe((response: any) => {
      console.log(response.result.response);
    });
  }

  changeSlide(direction: 'prev' | 'next') {
    if (direction === 'prev') {
      this.activeSlideIndex = (this.activeSlideIndex - 1 + 3) % 3; // 3 is the number of slides
    } else if (direction === 'next') {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % 3;
    }
  }

  hide_selectHeader() {
    const selectHeader = this.el.nativeElement.querySelector('#header');
    const selectTopbar = this.el.nativeElement.querySelector('#topbar');

    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          this.renderer.addClass(selectHeader, 'header-scrolled');
          if (selectTopbar) {
            this.renderer.addClass(selectTopbar, 'topbar-scrolled');
          }
        } else {
          this.renderer.removeClass(selectHeader, 'header-scrolled');
          if (selectTopbar) {
            this.renderer.removeClass(selectTopbar, 'topbar-scrolled');
          }
        }
      }

      window.addEventListener('load', headerScrolled);
      window.addEventListener('scroll', headerScrolled);
    }
  }
  selectedMenu: string = 'home';
  setActive(menu: string) {
    this.selectedMenu = menu; // Set the selected menu
  }
  //เริ่มต้น การ วินิจฉัย
  FullName: string = ""//ชื่อ
  email: string = ""//อีเมล
  phoneNumber: string = ""//เบอร์โทร
  age: number = 50; // ค่าเริ่มต้นสำหรับอายุ
  weight: number = 50; // ค่าเริ่มต้นสำหรับน้ำหนัก
  height: number = 50; // ค่าเริ่มต้นสำหรับส่วนสูง
  Waist: number = 50; // ค่าเริ่มต้นสำหรับรอบเอว
  bmiz: number = 0; // ค่าเริ่มต้นสำหรับ bmi
  bpd!: number;//ความดันตัวบน
  bps!: number;//ความดันตัวล่าง
  pulse!: number;//ชีพจร
  egfr!: number;//อัตราการกรองของเสียในไต
  smoking: number = 0;//คุณอาเจียนหรือไม่
  drinking: number = 0;//คุณติดโควิดหรือไม่


  responseValue: any;
  responseValue_2: any;


  //เช็คไม่กรอกข้อมูล
  fullNameResult!: string;
  phoneNumberResult!: string;
  emailResult!: string;
  bpdResult!: string;
  bpsResult!: string;
  pulseResult!: string;
  showContent: boolean = false;
  egfrResult!: string;
  onSubmit(clear: string) {

    //กำหนดค่าให้กับ swith จาก true false เป็น 0 กับ 1
    if (this.smoking) { this.smoking = 1 } else { this.smoking = 0 }
    if (this.drinking) { this.drinking = 1 } else { this.drinking = 0 }

    if (clear === '1') {
      //เช็คค่ากลับไปเป็น 0
      this.FullName = ""
      this.email = ""
      this.phoneNumber = ""
      this.age = 0;
      this.weight = 0;
      this.height = 0;
      this.Waist = 0;
      this.bpd = 0;
      this.bps = 0;
      this.egfr = 0
      this.smoking = 0;
      this.drinking = 0;
      this.showContent = !this.showContent

    } else {

      //เช็คค่าที่ไม่ได้กรอก
      if (this.FullName === "" || !this.FullName) {
        this.fullNameResult = 'กรุณากรอก ชื่อ-นามสกุล';
      } else {
        this.fullNameResult = ""
      }
      if (this.email === "" || !this.email) {
        this.emailResult = 'กรุณากรอก อีเมล';
      }
      else {
        this.emailResult = ""
      }
      if (this.phoneNumber === "" || !this.phoneNumber) {
        this.phoneNumberResult = 'กรุณากรอก เบอร์โทร';
      }
      else {
        this.phoneNumberResult = ""
      }
      if (this.bpd === 0 || !this.bpd) {
        this.bpdResult = 'กรุณากรอก ความดันตัวบน';
      }
      else {
        this.bpdResult = ""
      }
      if (this.bps === 0 || !this.bps) {
        this.bpsResult = 'กรุณากรอก ความดันตัวล่าง';
      }
      else {
        this.bpsResult = ""
      }
      if (this.pulse === 0 || !this.pulse) {
        this.pulseResult = 'กรุณากรอก ชีพจร';
      }
      else {
        this.pulseResult = ""
      }

      if (this.egfr === 0 || !this.egfr) {
        this.egfrResult = 'กรุณากรอก การกรองของเสียของไต';
      }
      else {
        this.egfrResult = ""
      }

      this.bmi();
      if (this.FullName && this.phoneNumber && this.email && this.bpd && this.bps && this.pulse && this.egfr) {
        this.showContent = !this.showContent
        //กำหนกตัวแปลเพื่อใช้ในการ วินิจฉัย
        const applicationData = {
          age: this.age,
          weight: this.weight,
          height: this.height,
          Waist: this.Waist,
          bmi: this.bmiz,
          bpd: this.bpd,
          bps: this.bps,
          pulse: this.pulse,
          egfr: this.egfr,
          smoking: this.smoking,
          drinking: this.drinking,
        }
        // ทำการวินิจฉัย
        this._serviceService.per_kidney(applicationData).subscribe((response: any) => {
          const jsonString = response.result;
          // แปลงข้อมูล JSON จากสตริงเป็นอ็อบเจกต์
          const jsonData = JSON.parse(jsonString);
          const responseData = jsonData.response;
          this.responseValue = responseData;
          this.responseValue_2 = responseData;
          //กำหนกตัวแปลเพื่อใช้ในการ บันทึกข้อมูล
          const installData = {
            name: this.FullName,
            phone: this.phoneNumber,
            email: this.email,
            age: String(this.age),
            weight: String(this.weight),
            height: String(this.height),
            bmi: String(this.bmiz),
            bpd: String(this.bpd),
            bps: String(this.bps),
            pulse: String(this.pulse),
            egfr: String(this.egfr),
            smoking: String(this.smoking),
            drinking: String(this.drinking),
            pdx: this.responseValue,
          }
          //บันทึกข้อมูลลง database
          this._serviceService.insert_data(installData).subscribe((response: any) => {
            console.log(response.result);
          });
        });
      }

    }
    // console.log("data : " + ' ' + this.FullName + ' ' + this.email + ' ' +
    //   this.phoneNumber + ' ' + this.age + ' ' + this.weight + ' ' + this.height + ' ' + this.bpd + ' ' + this.bps
    //   + ' ' + this.fever + ' ' + this.cough + ' ' + this.sore_throat + ' ' + this.phlegm + ' ' + this.headache + ' ' +
    //   this.vomit + ' ' + this.covid + ' ' + this.feverish)

  }

  bmi() {
    const bmis = this.weight / ((this.height / 100) ** 2);
    this.bmiz = bmis
  }
  goToReport() {
    const applicationData = {
      name: this.FullName,
      phone: this.phoneNumber,
      email: this.email,
      age: this.age,
      weight: this.weight,
      height: this.height,
      Waist: this.Waist,
      bmi: this.bmiz,
      bpd: this.bpd,
      bps: this.bps,
      pulse: this.bps,
      egfr: this.egfr,
      smoking: this.smoking,
      drinking: this.drinking,

      responseValue: this.responseValue,
      responseValue_2: this.responseValue_2,
    }
    const applicationDataString = JSON.stringify(applicationData);
    this.router.navigate(['/app-report-page-pro'], { queryParams: { data: applicationDataString } });
  }
  goToadmin() {
    this.router
    .navigateByUrl("/", { skipLocationChange: true })
    .then(() => {
        this.router.navigate(["/app-admin-page-uat"]);
    });
  }

}
