import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(localStorage.getItem('loggedIn'))
    if (localStorage.getItem('loggedIn')) {
      // this.router.navigate(['/app-admin-page-pro']);
      return true; // อนุญาตให้เข้าถึงหน้า Dashboard
    } else {
      this.router.navigate(['/app-login-page-uat']); // ถ้าไม่ได้ล็อกอิน ให้เปลี่ยนเส้นทางไปยังหน้า Login
      return false;
    }
  }

}
