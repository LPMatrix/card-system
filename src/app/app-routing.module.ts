import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "agent", redirectTo: 'agent/dashboard'},
  {path: "home", component: HomeComponent},
  {path: "admin", redirectTo: 'admin/dashboard'},
  {path: "dashboard", component:DashboardComponent},
  {path: "admin/login", component:AdminLoginComponent},
  {path: "agent/login", component:AgentLoginComponent},
  {path: "admin/dashboard", canActivate: [AdminAuthGuard], component:DashboardPageComponent},
  {path: "agent/dashboard", canActivate: [AuthGuard], component:AgentDashboardComponent},
  {path: "agent/capture", canActivate: [AuthGuard], component:CaptureComponent},
  {path: "admin/add-agent", canActivate: [AdminAuthGuard], component:AddAgentComponent},
  {path: "login", component: LoginComponent},
  {path: "profile", component: ProfileComponent},
  {path: "agent/profile", component: AgentProfileComponent},
  {path: "admin/profile", component: AdminProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
