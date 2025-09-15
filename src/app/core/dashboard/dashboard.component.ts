import {Component} from '@angular/core';
import {WorkQueueComponent} from '../../shared/components/work-queue/work-queue.component';
import {PortfolioGoalsComponent} from '../../shared/components/portfolio-goals/portfolio-goals.component';
import {QuickActionComponent} from '../../shared/components/quick-action/quick-action.component';
import {MyAccountsComponent} from '../../shared/components/my-accounts/my-accounts.component';
import {MarketIntelligenceComponent} from '../../shared/components/market-intelligence/market-intelligence.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    WorkQueueComponent,
    PortfolioGoalsComponent,
    QuickActionComponent,
    MyAccountsComponent,
    MarketIntelligenceComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true
})
export class DashboardComponent {

}
