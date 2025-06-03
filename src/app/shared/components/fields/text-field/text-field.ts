import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  imports: [],
  templateUrl: './text-field.html',
  styleUrl: './text-field.css',
})
export class TextField {
  placeholder = input<string>('');
}
