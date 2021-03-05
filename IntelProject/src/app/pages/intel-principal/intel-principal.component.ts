import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { People } from 'src/app/models/people.model';

@Component({
  selector: 'app-intel-principal',
  templateUrl: './intel-principal.component.html',
  styleUrls: ['./intel-principal.component.css']
})
export class IntelPrincipalComponent implements OnInit {

  headers = ["ID", "NAME", "LAST NAME", "ACTION"];
  peoples :People[] = [];
  showTable: boolean = false;
  people:People = new People();

  constructor() { }

  ngOnInit(): void {
    this.peoples = [
      { id: 1, name: "Marco", lastName: "Perez" },
      { id: 2, name: "Maria", lastName: "Miramontes" },
      { id: 3, name: "Abril", lastName: "Perez" },
      { id: 4, name: "Sofia", lastName: "Perez" }
    ]
    
    this.showTable = true;
  }

  public deletePeople(id){
    this.peoples = this.peoples.filter(people => people.id !== id);
    console.log(this.peoples);
  }

  public addPeople(people: People){
    let allIds =this.peoples.map(x=> x.id);
    const maxId = Math.max(...allIds);

    let addPeople = new People();
    addPeople.id = maxId + 1;
    addPeople.name =  people.name;
    addPeople.lastName = people.lastName;

    this.peoples.push(addPeople);

  }

}
