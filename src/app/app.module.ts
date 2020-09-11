import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { APP_ROUTES } from './app.routes';
import { RegisterComponent } from './login/register/register.component';
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthRequestOptions } from './services/auth/auth.request';
import { ErrorhandlerService } from './services/interceptors/errorhandler.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUserService } from './services/form-services/form-user.service';
import { UserComponent } from './user/user.component';
import {AuthSessionService} from './services/auth/auth-session.service';
import { LoginSessionComponent } from './login-session/login-session.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    LoginSessionComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ServiceModule,
    APP_ROUTES,

  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthRequestOptions,
    ErrorhandlerService,
    FormUserService,
    AuthSessionService,

    {
      provide: ErrorHandler,
      useClass: ErrorhandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthRequestOptions,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
