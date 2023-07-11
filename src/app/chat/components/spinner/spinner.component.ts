import { Component } from '@angular/core';

@Component({
  selector: 'iladiro-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  loading: boolean = false;

  run(action: string): void {
    switch (action) {
      case 'start':
        this.loading = true;
        break;
      case 'stop':
        this.loading = false;
        break;
      default:
        this.loading = false;
    }
  }

}
