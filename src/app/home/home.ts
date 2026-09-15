import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnDestroy {
  images: string[] = [
    'slideshow/bogota.jpg',
    'slideshow/madrid.jpg',
    'slideshow/buenosaires.jpg',
    'slideshow/pachuca.jpg',
    'slideshow/machupichu.jpg',
  ];

  countries: string[] = ['Colombia', 'España', 'Argentina', 'México', 'Perú'];

  currentIndex = signal(0);

  private intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => {
      this.currentIndex.update(i => (i + 1) % this.images.length);
    }, 14000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}


