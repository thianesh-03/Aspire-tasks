import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleCompComponent } from './sample-comp/sample-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SampleCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApp';
}
