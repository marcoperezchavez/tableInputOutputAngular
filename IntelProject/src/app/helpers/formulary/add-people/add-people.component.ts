import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { People } from 'src/app/models/people.model';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {
  peopleForm: FormGroup;
  @Output() addPeopleEmit = new EventEmitter<People>();
  people: People;

  constructor(private formBuilder: FormBuilder) { 
    this.peopleForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public addPeople(){
    this.people = new People();
    this.people.name = this.peopleForm.value['name']; 
    this.people.lastName = this.peopleForm.value['lastName']; 
    this.addPeopleEmit.emit(this.people);
  }

}
