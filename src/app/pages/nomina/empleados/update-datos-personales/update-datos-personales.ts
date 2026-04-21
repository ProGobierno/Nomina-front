import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'update-datos-personales',
  standalone: true,
  imports: [],
  templateUrl: './update-datos-personales.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateDatosPersonales { }
