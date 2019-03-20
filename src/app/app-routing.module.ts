import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/admin/admin.component';
import { NavComponent } from 'src/app/nav/nav.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { HomeComponent } from 'src/app/home/home.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { AdmPostComponent } from './adm-post/adm-post.component';
import { AdmPostDetailsComponent} from './adm-post-details/adm-post-details.component';

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'admPost', component: AdmPostComponent},
  {path:'admPost/:id', component: AdmPostDetailsComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'post/:id', component: PostComponent},
  {path:'**', redirectTo:'welcome', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
