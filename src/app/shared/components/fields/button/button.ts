import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, input, output } from '@angular/core';

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
  click = output<MouseEvent>();
  type = input<'button' | 'submit' | 'reset'>('button');

  handleClick(event: MouseEvent): void {
    if (!this.disabled()) {
      this.click.emit(event);
    }
  }
}
