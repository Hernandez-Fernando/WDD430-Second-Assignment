import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact = new Contact(1, 'Test', 'This conctact will be imported', 'from another component', 'and will be showen in the contact-detail component', null);
  constructor() { }

  ngOnInit(): void {
  }

}
