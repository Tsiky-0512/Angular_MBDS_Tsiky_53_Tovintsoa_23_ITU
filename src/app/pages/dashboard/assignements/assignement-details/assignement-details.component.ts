import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-assignement-details',
  templateUrl: './assignement-details.component.html',
  styleUrls: ['./assignement-details.component.scss']
})
export class AssignementDetailsComponent implements OnInit {

  constructor(
    private router:Router,
    private route:Route
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigateByUrl('/dashboard/assignement-list');
  }

}
