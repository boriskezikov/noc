import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Customer, Response} from './Response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private http: HttpClient) {
    this.getCustomer();
  }
  customers: Array<Customer>;
  private url = 'https://mk-nc.herokuapp.com/customers/?projection=plain';
  title = 'helloworld';
getCustomer() {
  this.http.get<Response>(this.url).subscribe(success => {
    this.customers = success.content;
    console.log(this.customers);
  }, error => {});
}

}
