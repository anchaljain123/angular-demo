import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit(formref:NgForm){
    this.http.post('https://jsonplaceholder.typicode.com/posts',{
      userId: Math.random(),
      id:Math.random(),
      title: formref.value.title
    }).subscribe(res => {
      console.log(res)
    },err=>{
      console.log(err)
    })
  }
}
