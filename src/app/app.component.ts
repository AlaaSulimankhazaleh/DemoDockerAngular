import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').set('content-type', 'application/json; charset=utf-8');
  title = 'helpdesk';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues().subscribe(x => {
      console.log(x);
    })
  }
  getValues(): Observable<any> {
    return this.http.get<any>("http://localhost:5006/api/values",
      { headers: this.httpHeaders, responseType: 'json' });
  }

}
