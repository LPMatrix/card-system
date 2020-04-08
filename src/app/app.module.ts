import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { AgentComponent } from './agent/agent.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { CaptureComponent } from './agent/capture/capture.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AgentProfileComponent } from './agent/agent-profile/agent-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminLoginComponent } from './auth/admin/login/login.component';
import { AgentLoginComponent } from './auth/agent/login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CardBackComponent } from './card-back/card-back.component';
import { CardComponent } from './card/card.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ErrorInterceptorService } from './error-interceptor.service';
import { WebcamModule } from 'ngx-webcam';
import { AgentForgotPasswordComponent } from './auth/agent/agent-forgot-password/agent-forgot-password.component';
import { AgentResetPasswordComponent } from './auth/agent/agent-reset-password/agent-reset-password.component';
import { ResetPasswordComponent } from './auth/login/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/login/forgot-password/forgot-password.component';
// import { AngularMaterialModule } from './angular-material.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    ProfileComponent,
    AgentComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    DashboardComponent,
    FooterComponent,
    DashboardPageComponent,
    AddAgentComponent,
    CaptureComponent,
    AgentDashboardComponent,
    AdminProfileComponent,
    AgentProfileComponent,
    AdminLoginComponent,
    AgentLoginComponent,
    CardBackComponent,
    CardComponent,
    ErrorComponent,
    LoadingSpinnerComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    AgentForgotPasswordComponent,
    AgentResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule,
    DataTablesModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents : [ErrorComponent]
})
export class AppModule { }
