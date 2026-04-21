import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'maestro-emple-toluca',
  standalone: true,
  imports: [],
  templateUrl: './maestro-emple-toluca.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaestroEmpleToluca { }
