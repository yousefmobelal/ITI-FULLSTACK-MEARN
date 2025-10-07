import { Component } from '@angular/core';
import { ChangeBg } from '../../directives/change-bg';

@Component({
  selector: 'app-home',
  imports: [ChangeBg],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
