import { Component, OnInit } from '@angular/core';
import { DynamicService } from '../dynamic.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{
  roomComponent:boolean=true
  name:any= '';
  avatar:string= '';

  constructor(private dynamicService:DynamicService){}
  ngOnInit(){

    this.dynamicService.currentNameSubject.subscribe(n => this.name = n)
    this.dynamicService.currentAvatarSubject.subscribe(url => this.avatar = url)
    
  }

  toCreateRoom(){
    if(this.roomComponent==true){
      this.roomComponent=false
    }
  }
}
