import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-link',
  templateUrl: './submit-link.component.html',
  styleUrls: ['./submit-link.component.css']
})
export class SubmitLinkComponent implements OnInit {
  urlInput = new FormControl('');
  urlvalue = 'key in Url';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.urlInput) {
    this.urlvalue = this.urlInput.value;
    } 
    else {
      this.urlvalue;
    }
  }

}
