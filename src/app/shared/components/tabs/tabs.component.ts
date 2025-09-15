import {Component, input, output} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [
    CommonModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  currentIndex = input<number>()
  indexChange = output<number>()

  readonly tabs = [
    {
      name: 'Dashboard',
      index: 0
    },
    {
      name: 'Accounts',
      index: 1

    },
    {
      name: 'Brokers',
      index: 2

    },
    {
      name: 'Submissions',
      index: 3

    },
    {
      name: 'Organizations',
      index: 4

    },
    {
      name: 'Goals Rules',
      index: 5

    },
    {
      name: 'Admin',
      index: 6
    }
  ]


  selectedTab(index: number): void {
    this.indexChange.emit(index)
  }

}
