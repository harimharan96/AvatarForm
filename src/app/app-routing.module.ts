import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { NameComponent } from './name/name.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path:'name', component: NameComponent},
  { path:'avatar', component: AvatarComponent},
  { path:'room', component: RoomComponent},
  { path:'create-room', component: CreateRoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
