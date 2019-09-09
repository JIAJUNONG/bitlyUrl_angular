import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UrlDetailsService } from '../url-details.service';
import { ActivatedRoute } from '@angular/router';

// import { storage } from '..';
// import {NextFunction, Request, Response} from 'express';
// import { storage } from '../../../../express-basic/src/index';


@Component({
  selector: 'app-submit-link',
  templateUrl: './submit-link.component.html',
  styleUrls: ['./submit-link.component.css']
})
export class SubmitLinkComponent implements OnInit {
  @Input()
  urlInput = new FormControl();
  urlvalue = 'key in Url';
  
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private UrlDetailsService: UrlDetailsService) { }

  ngOnInit() {
    // let id = this.route.sna
    // this.UrlDetailsService.shortUrl(this.id).subscribe((this.short) => {
    //   this.short = short
    // })
  }


  onClick() {
    this.UrlDetailsService.urlInfo(this.urlInput.value).subscribe(Response => {
      console.log(this.urlInput);
      console.log(Response);
      alert('Submitted Successfully');
      this.urlInput.reset();
    });
    //let id = this.rou
    // this.UrlDetailsService.shortUrl(this.short).subscribe
  }


  onClickReset() {
    this.urlInput.reset();
  }


}
