import {Component, signal} from '@angular/core';
import {TabsComponent} from '../../shared/components/tabs/tabs.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AccountComponent} from '../account/account.component';

@Component({
  selector: 'app-main',
  imports: [
    TabsComponent,
    DashboardComponent,
    AccountComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  currentIndex = signal(0)

  setIndex(index: number) {
    this.currentIndex.set(index)
  }
}
