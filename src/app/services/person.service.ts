import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Person } from '../../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personsUrl = 'http://localhost:3000/people';

  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http
      .get<Person[]>(this.personsUrl)
      .pipe(tap(people => console.log(`fetched ${people.length} people`)));
  }
}
