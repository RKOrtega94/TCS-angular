import {
  AfterViewInit,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductForm } from '../../components/product-form/product-form';

interface FormState {
  route: string;
  fetching: boolean;
  error: string | null;
}

const initialState: FormState = {
  route: '',
  fetching: false,
  error: null,
};

@Component({
  imports: [ProductForm],
  templateUrl: './product-form-page.html',
  styleUrl: './product-form-page.css',
})
export class ProductFormPage implements AfterViewInit {
  #router = inject(Router);
  #state = signal<FormState>(initialState);
  route = computed(() => this.#state().route);
  fetching = computed(() => this.#state().fetching);

  ngAfterViewInit(): void {
    this.#state.set({
      ...this.#state(),
      route: this.#router.url,
      fetching: false,
      error: null,
    });
  }
}
