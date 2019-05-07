import { Component, OnInit } from '@angular/core';
import {mongoService} from '../mongo.service';
import {IProject} from './project';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-mymodels',
  templateUrl: './mymodels.component.html',
  styleUrls: ['./mymodels.component.css']
})
export class MymodelsComponent implements OnInit {
  public username = this.route.snapshot.paramMap.get('id') ;

  listFilter1 = '';
  get listFilter(): string {
    return this.listFilter1;
  }
  set listFilter(value: string) {
    this.listFilter1 = value;
    this.filteredproject = this.listFilter ? this.performFilter(this.listFilter) : this.projects;
  }

  filteredproject: IProject[] = [];
  projects: any;

  performFilter(filterBy: string): IProject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.projects.filter((project: IProject) =>
      project.Projecttitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(public getDetails: mongoService, public route: ActivatedRoute) {
    this.filteredproject = this.projects;
  }
  /*add(element){
    console.log(element);

  };*/

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getDetails.mymodelDetails(this.route.snapshot.paramMap.get('id')).subscribe(result => {
      this.projects = result;
      this.filteredproject = this.projects;
     // console.log('login check point result - ', result);
     });


  }

  deletemodal(element) {
    console.log(element);
    this.getDetails.Deletemodal(element).subscribe(result => {
      console.log(result);
      alert(result);
      this.ngOnInit();
    });
  }
}
