import { Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import {  } from '../list-characters/';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  // @Input() planet!: ;
  constructor(public activeModal: NgbActiveModal) {}
  
  ngOnInit(): void {

  }
}
