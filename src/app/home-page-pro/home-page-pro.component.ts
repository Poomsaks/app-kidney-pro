import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-page-pro',
  templateUrl: './home-page-pro.component.html',
  styleUrls: ['./home-page-pro.component.css']
})
export class HomePageProComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollValue = window.scrollY;

    if (scrollValue >= 100) {
      this.renderer.addClass(this.el.nativeElement, 'topbar-scrolled');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'topbar-scrolled');
    }
  }
}
