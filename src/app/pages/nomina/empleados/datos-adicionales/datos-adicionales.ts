import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'datos-adicionales',
  standalone: true,
  imports: [],
  templateUrl: './datos-adicionales.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatosAdicionales { }
