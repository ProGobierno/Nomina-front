import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'maestro-empleados',
  standalone: true,
  imports: [],
  templateUrl: './maestro-empleados.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaestroEmpleados { }
