import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() onSelected: EventEmitter<HeaderItem> =
    new EventEmitter<HeaderItem>();

  get linkHeader() {
    return HeaderItem;
  }

  clickedItem(item: HeaderItem): void {
    this.onSelected.emit(item);
  }
}
