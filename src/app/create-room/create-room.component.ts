import { Component, OnInit } from '@angular/core';
import { DynamicService } from '../dynamic.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit{
  num:any='';
  name:any= '';
  avatar:string= '';
  numericOnly(event): boolean {    
    let patt = /[1-5]/;
    let result = patt.test(event.key);
    return result;
}
  constructor(private dynamicService:DynamicService){}
  ngOnInit(){

    this.dynamicService.currentNameSubject.subscribe(n => this.name = n)
    this.dynamicService.currentAvatarSubject.subscribe(url => this.avatar = url)
  }

}
