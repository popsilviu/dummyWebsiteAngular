import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() images: string[];

  private currentSlide: number = 0;

  public showSlideAtIndex(index: number) {
    return this.currentSlide === index;
  }

  public selectNextSlide() {
    if (this.currentSlide < this.images.length - 1) {
      this.currentSlide += 1;
    } else {
      this.currentSlide = 0;
    }
  }

  public selectPreviousSlide() {
    if (this.currentSlide == 0) {      
      this.currentSlide = this.images.length - 1;
    } else {
      this.currentSlide -= 1;
    }
  }
}
