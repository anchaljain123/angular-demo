import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  fname = 'anchal';
  lname=  'jain';
  val=true;
  status: boolean;
  posts: object[];
  user= {
    uname: ''
  }

  constructor(){
    console.log("ctor......")
    this.getUserStatus();
    this.posts=[
      {title:"post1"},
      {title:"post2"},
      {title:"post3"},
      {title:"post4"},
    ]
  }
  ngOnInit(){

  }
  displayFname(){
    return this.fname;
  }
  getUserStatus(){
    this.status = false;
  }
  handleClk(){
    alert("hello")
  }
  greet(){
    alert('Bind')
  }
  mousingOver(){
    console.log(">>>mousingOver")
  }
  keyDown(){
    alert('keyDown')
  }
  onSubmit(formref: NgForm){ //convert form from htm to object
    console.log(">>>",formref, formref.value)
    this.user.uname = formref.value.uname
  }
}
