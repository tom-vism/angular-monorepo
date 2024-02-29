import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedLibComponent } from 'libs/shared-lib/src/lib/shared-lib/shared-lib.component';

@Component({
  standalone: true,
  imports: [RouterModule, SharedLibComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app1';
}
