import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }
  onClickStock(){
    console.log("stock");
  }
  onClickBond(){
    console.log("bond");
  }
  onClickAbout(){
    console.log("about");
  }
  onClickContact(){
    console.log("contact");
  }

  ngOnInit() {
  }

}
