import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
  private nameSubject = new BehaviorSubject('');
  currentNameSubject = this.nameSubject.asObservable();

  sendName(name:string){
    this.nameSubject.next(name);
  }


  private avatarSubject = new BehaviorSubject('');
  currentAvatarSubject = this.avatarSubject.asObservable();
  sendAvatar(avatar:string){
    this.avatarSubject.next(avatar)    
  }

  
}
