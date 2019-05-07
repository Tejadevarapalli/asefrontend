import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {mongoService} from '../mongo.service';
import {saveas} from 'file-saver';
import {FileuploadService} from '../fileupload.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  projectdetails: object;
  commentdetails: object;
  form: FormGroup;

  constructor(private route: ActivatedRoute, public service: mongoService, public dservice: FileuploadService,
              public home: HomeComponent) { }

  onSubmit() {
      this.form.value.User = this.route.snapshot.paramMap.get('user');
      console.log(this.form.value.User);
      console.log(this.route.snapshot.paramMap.get('id'));
      console.log(this.form.value.Comment);
      this.service.comment(this.form.value.User, this.route.snapshot.paramMap.get('id'), this.form.value.Comment).subscribe(data => {
        console.log(data);
        this.form.reset();
        this.ngOnInit();
      });
  }

  ngOnInit() {
    this.form = new FormGroup(
      {
        projecttitle: new FormControl(),
        Comment: new FormControl(),
        User: new FormControl()
      });
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.service.commentdetails(id).subscribe(result => {
      this.commentdetails = result;
    });
    this.service.viewdetails(id).subscribe(result => {
      console.log(result);
      this.projectdetails = result;
    });


  }
    download()
    {
      console.log(this.projectdetails);
      // this.dservice.downloadFile(this.projectdetails[0].User, this.projectdetails[0].Projecttitle)
      //      .subscribe(
      //        data => console.log(data),
      //        error => console.error(error)
      //      );
      window.open('http://localhost:3000/file/download/' + this.projectdetails[0].User + '/' + this.projectdetails[0].Projecttitle);
    }


}
