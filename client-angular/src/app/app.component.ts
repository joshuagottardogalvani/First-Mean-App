import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: string[];
  private BASE_URL:string = '/api';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://3000-f9c92aed-e318-4177-bd08-c7e0af096913.ws-eu0.gitpod.io/api').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }
}
