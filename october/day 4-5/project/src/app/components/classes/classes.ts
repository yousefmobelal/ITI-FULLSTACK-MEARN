import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-classes',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './classes.html',
  styleUrl: './classes.css',
})
export class Classes {}
