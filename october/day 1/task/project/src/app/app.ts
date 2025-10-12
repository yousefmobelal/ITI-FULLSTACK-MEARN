import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './components/first/first';
import { Second } from './components/second/second';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, First, Second],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
