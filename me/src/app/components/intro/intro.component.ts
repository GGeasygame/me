import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  skipped = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    this.skipped = true;
  }
}
