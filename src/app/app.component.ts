import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dummyWebsiteAngular';

  constructor(private router: Router) { }

  navigate(url: string) {
    this.router.navigateByUrl(url)
  }
}
