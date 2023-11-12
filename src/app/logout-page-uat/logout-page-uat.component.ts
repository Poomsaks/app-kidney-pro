import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page-uat',
  templateUrl: './logout-page-uat.component.html',
  styleUrls: ['./logout-page-uat.component.css']
})
export class LogoutPageUatComponent  {
  constructor(private router: Router) {
    // ลบสถานะการล็อกอินและเปลี่ยนเส้นทางไปยังหน้า Login
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/app-login-page-uat']);
  }
}
