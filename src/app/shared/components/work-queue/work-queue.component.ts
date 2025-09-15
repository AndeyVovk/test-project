import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../api/dashboard.service';
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common';
import {WorkQueue} from '../../interfaces/dashboard';

@Component({
  selector: 'app-work-queue',
  imports: [CommonModule],
  templateUrl: './work-queue.component.html',
  styleUrls: ['./work-queue.component.scss'],
  standalone: true
})
export class WorkQueueComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {
  }

  queues$:Observable<WorkQueue[]> = new Observable()

  ngOnInit(): void {
    this.queues$ = this.dashboardService.getAccounts()
  }
}
