import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { JobCardComponent } from "./job-card/job-card.component";
import { JobListComponent } from "./job-list/job-list.component";
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, JobCardComponent, JobListComponent,SearchBarComponent]
})
export class AppComponent {
  title = 'job-project';
}
