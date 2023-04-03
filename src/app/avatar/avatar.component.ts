import { Component, OnInit } from '@angular/core';
import { DynamicService } from '../dynamic.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  avatarComponent:boolean = true
  name:any= '';
  avatar:any='';

  constructor(private dynamicService:DynamicService){}
  ngOnInit(){

    this.dynamicService.currentNameSubject.subscribe(n => this.name = n)
    
  }

  avatarUrl(): string{
    
      if(this.avatar==1){
        return "../../files/Avatar 1 (large states.png"
      } else if (this.avatar==2) {
        return "../../files/Avatar 2 (large states.png"
      } else if(this.avatar==3){
        return "../../files/Avatar 3 (large states.png"
      }else if(this.avatar==4){
        return "../../files/Avatar 6.png"
      }else if(this.avatar==5){
        return "../../files/Avatar 7.png"
      }else{
        return "nothing"
      } 
    
  }

  async toRoom(){
    if(this.avatarComponent==true){
      this.avatarComponent=false
    }
    let avatarUrl = await this.avatarUrl()
    this.dynamicService.sendAvatar(avatarUrl);
  }
}
