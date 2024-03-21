import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  userProfile: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userProfile = history.state.profile;
  }
}
