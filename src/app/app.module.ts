import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeeComponent } from './homee/homee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { environment} from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FileUploadModule } from 'ng2-file-upload';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MymodelsComponent } from './mymodels/mymodels.component';
import { ViewComponent } from './view/view.component';
import { ModelsComponent } from './models/models.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeeComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    SignupComponent,
    SigninComponent,
    MymodelsComponent,
    ViewComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    // PopupModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
