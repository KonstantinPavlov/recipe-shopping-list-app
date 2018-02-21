import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItem = 'recipe';

  onNavigate(menuSelector: string) {
    this.menuItem = menuSelector;
  }
}
