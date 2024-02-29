import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-shared-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-lib.component.html',
  styleUrl: './shared-lib.component.css',
})
export class SharedLibComponent {}
