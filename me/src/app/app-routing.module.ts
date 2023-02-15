import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {IntroComponent} from "./components/intro/intro.component";
import {ProjectsComponent} from "./components/projects/projects.component";

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'projects', component: ProjectsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
