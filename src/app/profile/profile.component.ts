import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { mongoService} from '../mongo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profiledata: any;
description: any;

  constructor(public router: Router, public route: ActivatedRoute, public service: mongoService) {
  }

  ngOnInit() {
    this.service.profiledetails(this.route.snapshot.paramMap.get('id')).subscribe(details => {
      console.log(details);
      this.profiledata = details[0];
      console.log(this.profiledata);
    });
    this.service.profiledetail(this.route.snapshot.paramMap.get('id'), this.description).subscribe(details => {
      console.log(details);
    });
  }

}
