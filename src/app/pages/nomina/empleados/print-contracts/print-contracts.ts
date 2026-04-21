import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'print-contracts',
  standalone: true,
  imports: [],
  templateUrl: './print-contracts.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintContracts { }
