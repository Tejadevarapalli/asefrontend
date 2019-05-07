import {Injectable} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
display = 'none';
public username = this.route.snapshot.paramMap.get('id');
  constructor(public route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  openModal() {
    this.display = 'block';
  }

  onCloseHandled(){
    this.display = 'none';
  }

  mymodels()
  {
    this.router.navigateByUrl('/mymodels/' + this.route.snapshot.paramMap.get('id'));
  }

  models()
  {
    this.router.navigateByUrl('/models/' + this.route.snapshot.paramMap.get('id'));
  }

  profile()
  {
    this.router.navigateByUrl('/profile/' + this.route.snapshot.paramMap.get('id'));
  }
}


