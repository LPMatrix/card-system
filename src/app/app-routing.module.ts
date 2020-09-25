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
import { ViewAgentComponent } from './admin/view-agent/view-agent.component';
import { ExcoAuthGuard } from './auth/exo.auth.guard';
import { ExcoForgetPasswordComponent } from './exco/exco-forget-password/exco-forget-password.component';
import { GetcountComponent } from './getcount/getcount.component';
import { ExportComponent } from './admin/export/export.component';

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
  {path: "admin/view-agent", canActivate: [AdminAuthGuard],  component: ViewComponent},
  {path: "admin/edit-user/:user", canActivate: [AdminAuthGuard],  component: EditUserComponent},
  {path: "admin/agent-user", canActivate: [AdminAuthGuard], component: ViewAgentComponent},
  {path: "admin/add-exco", canActivate: [AdminAuthGuard],  component: AddExcoComponent},
  {path: "admin/excos", canActivate: [AdminAuthGuard],  component: ViewExcosComponent},
  {path: "admin/verify", canActivate: [AdminAuthGuard],  component: VerifyComponent},
  {path: "admin/export", canActivate: [AdminAuthGuard],  component: ExportComponent},
  {path: "verify/details", component: DetailsComponent},
  {path: "exco", redirectTo: 'exco/dashboard'},
  {path: "exco/login", component: ExcoLoginComponent},
  {path: "exco/profile", canActivate: [ExcoAuthGuard], component: ExcoProfileComponent},
  {path: "exco/validate", canActivate: [ExcoAuthGuard], component: ValidateComponent},
  {path: "exco/dashboard", canActivate: [ExcoAuthGuard], component: ExcoComponent},
  {path: "exco/agent/reset/:token", component: ExcoPasswordComponent},
  {path: "exco/forget-password", component: ExcoForgetPasswordComponent},
  {path: "enrolled", component: GetcountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
