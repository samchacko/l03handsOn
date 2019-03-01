//   Requirements
//   Step 1
//    Add the following properties and values to the AppComponent class within the app.component.ts file:
//
//       City - include the city you live in.
//       Tag line - make up a unique tag line.
//       About Me - a quick paragraph about you.


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mr. Sam Chacko';
  City = "Houston, TX";
  tagLine = "Thank you Bethel School of Technology & Woz-U!";
  AboutMe = "I code in Ruby on Rails. And after this course in Angular also. Trying to  find a job";
}
