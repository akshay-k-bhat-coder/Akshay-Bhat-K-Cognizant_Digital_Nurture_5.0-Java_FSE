import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { CourseList } from './course-list/course-list';
import { StudentProfile } from './student-profile/student-profile';
import { CourseCard } from './components/course-card/course-card';

@NgModule({
  declarations: [App, Header, Home, CourseList, StudentProfile, CourseCard],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
