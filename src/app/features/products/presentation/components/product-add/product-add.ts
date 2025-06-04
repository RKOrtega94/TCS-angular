import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Button } from '@app/shared/components/fields/button/button';

@Component({
  selector: 'app-product-add',
  imports: [RouterModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {}
