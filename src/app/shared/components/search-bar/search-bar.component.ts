import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() public placeholder: string = '';

  @Output() public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
