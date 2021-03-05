import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { People } from 'src/app/models/people.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() headers: any;
  @Input()  peoples: People[];
  @Output() peopleEmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.peoples);
  }
  
  deletePeople(id){
    this.peopleEmit.emit(id);
  }
}
