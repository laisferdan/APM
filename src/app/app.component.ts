import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      CommonModule, 
      FormsModule,
      SharedModule,
      RouterOutlet,
      RouterLink
    ]
})
export class AppComponent {
  pageTitle: string = 'Application Product Management';
}
