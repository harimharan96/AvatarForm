import { Component, OnInit} from '@angular/core';
import { DynamicService } from '../dynamic.service';



@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit{
  
  nameComponent:boolean = true;

  name:string = '';
  constructor(private dynamicService:DynamicService) { }



  toAvatar(){
    if(this.nameComponent==true){
      this.nameComponent = false
    }
    console.log(this.name)
    this.dynamicService.sendName(this.name);
    
  }

  ngOnInit(){
   
  }
}


