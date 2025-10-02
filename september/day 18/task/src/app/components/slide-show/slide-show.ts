import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  imports: [],
  templateUrl: './slide-show.html',
  styleUrl: './slide-show.css',
})
export class SlideShow {
  images: Array<string> = [
    'https://images.unsplash.com/photo-1759188534271-be7832eff679?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1759327806217-22269754802a?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1759203111456-b63e81a03cec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://plus.unsplash.com/premium_photo-1759354802989-fe550925a411?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1759164894030-4a60b87250d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    'https://images.unsplash.com/photo-1759145766123-c6ec8cfe6fc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  currentImageIndex: number = 0;

  get currentImage(): string {
    return this.images[this.currentImageIndex];
  }

  interval: any;

  showNextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex == this.images.length) {
      this.currentImageIndex = 0;
    }
    console.log(this.currentImageIndex);
  }

  showPreviousImage() {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }
  }

  startSlider() {
    this.stopSlider();
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 1000);
  }

  stopSlider() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
