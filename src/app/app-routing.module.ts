import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { CaptureComponent } from './agent/capture/capture.component';
import { AdminLoginComponent } from './auth/admin/login/login.component';
import { AgentLoginComponent } from './auth/agent/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminAuthGuard } from './auth/admin.auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AgentProfileComponent } from './agent/agent-profile/agent-profile.component';
import { UserAuthGuard } from './auth/user.auth.guard';
import { ForgotPasswordComponent } from './auth/login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/login/reset-password/reset-password.component';
import { AgentForgotPasswordComponent } from './auth/agent/agent-forgot-password/agent-forgot-password.component';
import { AgentResetPasswordComponent } from './auth/agent/agent-reset-password/agent-reset-password.component';
import {ViewComponent } from './admin/view/view.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AddExcoComponent } from './admin/add-exco/add-exco.component';
import { ViewExcosComponent } from './admin/view-excos/view-excos.component';
import { DetailsComponent } from './verify/details/details.component';
import { VerifyComponent } from './admin/verify/verify.component';
import { ExcoComponent } from './exco/exco/exco.component';
import { ExcoProfileComponent } from './exco/profile/profile.component';
import { ValidateComponent } from './exco/validate/validate.component';
import { ExcoLoginComponent } from './auth/exco/exco-login/exco-login.component';
import { ExcoPasswordComponent } from './auth/exco/exco-password/exco-password.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "agent", redirectTo: 'agent/dashboard'},
  {path: "home", canActivate: [UserAuthGuard], component: HomeComponent},
  {path: "admin", redirectTo: 'admin/dashboard'},
  {path: "admin/login", component:AdminLoginComponent},
  {path: "agent/login", component:AgentLoginComponent},
  {path: "admin/dashboard", canActivate: [AdminAuthGuard], component:DashboardPageComponent},
  {path: "agent/dashboard", canActivate: [AuthGuard], component:AgentDashboardComponent},
  {path: "agent/capture", canActivate: [AuthGuard], component:CaptureComponent},
  {path: "admin/add-agent", canActivate: [AdminAuthGuard], component:AddAgentComponent},
  {path: "login", component: LoginComponent},
  {path: "profile", canActivate: [UserAuthGuard], component: ProfileComponent},
  {path: "agent/profile", canActivate: [AuthGuard], component: AgentProfileComponent},
  {path: "admin/profile", canActivate: [AdminAuthGuard], component: AdminProfileComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "reset/:token", component : ResetPasswordComponent},
  {path: "agent/forgot-password", component : AgentForgotPasswordComponent},
  {path: "agent/reset/:token", component: AgentResetPasswordComponent},
  {path: "admin/view-agent", component: ViewComponent},
  {path: "admin/edit-user", component: EditUserComponent},
  {path: "admin/add-exco", component: AddExcoComponent},
  {path: "admin/excos", component: ViewExcosComponent},
  {path: "admin/verify", component: VerifyComponent},
  {path: "verify/details", component: DetailsComponent},
  {path: "exco", redirectTo: 'exco/dashboard'},
  {path: "exco/login", component: ExcoLoginComponent},
  {path: "exco/profile", component: ExcoProfileComponent},
  {path: "exco/validate", component: ValidateComponent},
  {path: "exco/dashboard", component: ExcoComponent},
  {path: "exco/reset-password", component: ExcoPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
