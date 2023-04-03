
import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent implements OnInit{  

  constructor(private router: Router) {}

  ngOnInit(): void {
  //   setTimeout(() => {
  //     this.router.navigate(['name']);
  // }, 2000);
  this.router.navigate(['name']);
  }
}
