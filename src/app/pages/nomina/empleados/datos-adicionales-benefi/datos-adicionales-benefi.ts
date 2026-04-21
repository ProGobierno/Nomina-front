import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'datos-adicionales-benefi',
  standalone: true,
  imports: [],
  templateUrl: './datos-adicionales-benefi.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatosAdicionalesBenefi { }
