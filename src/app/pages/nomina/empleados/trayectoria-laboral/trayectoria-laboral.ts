import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'strayectoria-laboral',
  standalone: true,
  imports: [],
  templateUrl: './trayectoria-laboral.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrayectoriaLaboral { }
