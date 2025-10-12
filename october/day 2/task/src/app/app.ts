import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablesData } from './components/tables-data/tables-data';
import { SlideShow } from './components/slide-show/slide-show';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablesData, SlideShow],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('task');
}
