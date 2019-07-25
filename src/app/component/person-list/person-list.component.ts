import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  loading = false;
  // Pagination Fields
  allPeople: Person[] = [];
  people: Person[] = []; // Current Page
  total = 0;
  selectedPage = 1;
  start = 0;
  limit = 10;
  end = this.limit;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.loading = true;
    this.personService.getPersons().subscribe(people => {
      this.total = people.length;
      this.allPeople = people;
      this.people = this.allPeople.slice(this.start, this.end);
      this.loading = false;
    });
  }

  // Handle Pagination Clicks
  public pageChange(page): void {
    this.start = (this.selectedPage - 1) * this.limit;
    this.end = this.start + this.limit;
    this.people = this.allPeople.slice(this.start, this.end);
  }
}
