import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileUploader} from 'ng2-file-upload';
import {FileuploadService} from '../fileupload.service';
import { mongoService } from '../mongo.service';
import  { HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {HomeComponent} from '../home/home.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


const uri = 'http://ase-backend.herokuapp.com/file/upload';


@Component({
  selector: 'app-homee',
  templateUrl: './homee.component.html',
  styleUrls: ['./homee.component.css']
})
export class HomeeComponent implements OnInit {
public projecttitle: any;
  form1: FormGroup;
  filedata: any;
  uploader: FileUploader = new FileUploader({url: uri });
  attachmentList: any = [];

  constructor(private _fileService: FileuploadService, public formDetails: mongoService,
              public route: ActivatedRoute,public router: Router, public home: HomeComponent) {
    this.uploader.onCompleteItem = (item: any, response: any) => {
      this.filedata = JSON.parse(response);
      console.log(this.filedata.originalname);
      this._fileService.movefiles(this.filedata.originalname,this.route.snapshot.paramMap.get('id'), this.projecttitle).subscribe(data =>{
        console.log(data);
      });
    };
  }



  ngOnInit() {
    this.form1 = new FormGroup(
      {
        User: new FormControl(),
        Projecttitle : new FormControl(),
        ProjectDescription : new FormControl(),
        GithubURL : new FormControl(),
        Likes: new FormControl()
      });
  }
  onSubmit1() {
    console.log(this.form1.value);
      this.form1.value.User = this.route.snapshot.paramMap.get('id');
    this.form1.value.Likes = 0;
    this.formDetails.sendDetails(this.form1.value).subscribe(result => {
      console.log('login check point result - ', result);
      /*this.formDetails.sendfilename(result.uploadname).subscribe( details => {
        console.log(details);});*/
      this.home.onCloseHandled();
    });
  }
}



