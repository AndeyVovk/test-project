import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../api/dashboard.service';
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs';
import {AsyncPipe, NgForOf} from '@angular/common';
import {Policies} from '../../interfaces/dashboard';

@Component({
  selector: 'app-my-accounts',
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './my-accounts.component.html',
  styleUrl: './my-accounts.component.scss'
})
export class MyAccountsComponent implements OnInit {
  polities$: Observable<Policies[]> = new Observable()
  private searchTerm$ = new BehaviorSubject<string>('');

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.polities$ = combineLatest([
      this.dashboardService.getPolicies(),
      this.searchTerm$,
    ]).pipe(
      map(([polities, search]: [Policies[], string]) => {
        return polities.filter((v: Policies) => v.name.toLowerCase().includes(search.toLowerCase())
        )
      })
    )
  }

  sort() {
    this.polities$ = this.dashboardService.getPolicies().pipe(
      map(policies =>
        [...policies].sort((a: Policies, b: Policies) => a.name.localeCompare(b.name))
      )
    );
  }

  search(v: Event): void {
    const value = (v.target as HTMLInputElement).value;
    this.searchTerm$.next(value);
  }
}
