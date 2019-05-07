import { Component, OnInit } from '@angular/core';
import { mongoService} from '../mongo.service';
import { IModelsprojects } from './modelsprojects';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  public username = this.route.snapshot.paramMap.get('id') ;
  listFilter1 = '';
  get listFilter(): string {
    return this.listFilter1;
  }
  set listFilter(value: string) {
    this.listFilter1 = value;
    this.filteredproject = this.listFilter ? this.performFilter(this.listFilter) : this.projects;
  }

  filteredproject: IModelsprojects[] = [];
  projects: any;

  performFilter(filterBy: string): IModelsprojects[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.projects.filter((project: IModelsprojects) =>
      project.Projecttitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private service: mongoService,public route:ActivatedRoute) {
    this.filteredproject = this.projects;

  }

  ngOnInit() {
    this.service.modelDetails().subscribe(result => {
      console.log('login check point result - ', result);
      this.projects = result;
      this.filteredproject = this.projects;
    });
  }

    like(element) {
      console.log(element);
      this.service.Likecount(element).subscribe(result => {
        console.log(result);
      });
    }
}
