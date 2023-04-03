import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { LogoComponent } from './logo/logo.component';
import { AvatarComponent } from './avatar/avatar.component';
import { RoomComponent } from './room/room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { FormsModule } from '@angular/forms';
import { DynamicService } from './dynamic.service';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    LogoComponent,
    AvatarComponent,
    RoomComponent,
    CreateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: [DynamicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
