import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'update-beneficiarios',
  standalone: true,
  imports: [],
  templateUrl: './update-beneficiarios.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateBeneficiarios { }
