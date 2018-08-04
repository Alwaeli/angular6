import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs'




@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})



export class AddskillComponent implements OnInit {
 data={
 name :'',
 age :'',
 phone:'',
 address:'',
 note:''

}

itemList: AngularFireList<any>

  constructor( public db:AngularFireDatabase) { 

    this.itemList=db.list('addskill')
  }

  ngOnInit() {
  }
 
  insert(){
    this.itemList.push({

      name :this.data.name,
      age :this.data.age,
      phone:this.data.phone,
      address:this.data.address,
      note:this.data.note

    })
  }
      

}
