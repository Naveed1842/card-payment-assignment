import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'angular-lab';
  constructor(private router: Router){}
  ngOnInit(): void {
    
  }

  public navigate(url :string){
    this.router.navigate([url])
  }

}
