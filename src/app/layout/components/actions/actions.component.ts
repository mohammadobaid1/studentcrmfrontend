import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  notifications: any[];
  messages: any[];
  files: any[];
  closeDropdown: EventEmitter<boolean>;
  userroles: string;
  admin: boolean= false;
  @Input() layout: string;

  constructor(
    private httpSv: HttpService,
    private router: Router,
    private cookieservice:CookieService
  ) {
    this.notifications = [];
    this.messages = [];
    this.files = [];
    this.closeDropdown = new EventEmitter<boolean>();
    this.layout = 'vertical';
  }

  ngOnInit() {
    this.getData('assets/data/navbar-notifications.json', 'notifications');
    this.getData('assets/data/navbar-messages.json', 'messages');
    this.getData('assets/data/navbar-files.json', 'files');
    this.userroles = localStorage.getItem ('userroles');

    if (this.userroles == 'admin') {
      this.admin = true;
    }


  }

  getData(url: string, dataName: string) {
    this.httpSv.getData(url).subscribe(
      data => {
        this[dataName] = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onCloseDropdown() {
    this.closeDropdown.emit(true);
  }

  goTo(event: Event, link: string, layout: string = '') {
    event.preventDefault();

    this.onCloseDropdown();

    setTimeout(() => {
      this.router.navigate([layout ? layout : this.layout, link]);
    });
  }


  logout(){

   var token = localStorage.getItem('token');
   console.log(token);
   localStorage.removeItem('token'); 
    this.httpSv.logout(token)
    .subscribe(data=>{
      this.cookieservice.deleteAll();
      
     this.router.navigate(['/public/login']);
    },
    error=>{
      console.log(error);
    })
    

  }



}
