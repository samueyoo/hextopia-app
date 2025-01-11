import { Component } from '@angular/core';
import { HandPanelComponent } from './hand-panel/hand-panel.component';
import { ResourcePoolComponent } from './resource-pool/resource-pool.component';

@Component({
  selector: 'app-root',
  imports: [HandPanelComponent, ResourcePoolComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hextopia-app';
}
