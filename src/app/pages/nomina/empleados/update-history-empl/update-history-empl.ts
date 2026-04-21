import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'update-history-empl',
  standalone: true,
  imports: [],
  templateUrl: './update-history-empl.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateHistoryEmpl { }
