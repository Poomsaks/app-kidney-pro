import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page-uat',
  templateUrl: './login-page-uat.component.html',
  styleUrls: ['./login-page-uat.component.css']
})
export class LoginPageUatComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) {}
  login() {
    if (this.username === 'admin' && this.password === '1234') {
      localStorage.setItem('loggedIn', 'true'); // ตั้งค่าสถานะการล็อกอิน
      this.router.navigate(['/app-admin-page-uat']); // เปลี่ยนเส้นทางไปยังหน้า Dashboard
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  }
  main() {
    this.router.navigate(['/app-home-page-pro']); // เปลี่ยนเส้นทางไปยังหน้า Dashboard
  }


}
