import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  variant = input<'primary' | 'secondary' | 'default'>('default');
  size = input<'small' | 'medium' | 'large'>('medium');
  disabled = input(false, {
    transform: booleanAttribute,
  });
}
