import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit {
  pageHeightString = window.getComputedStyle(document.body).getPropertyValue("--page-height")
  pageHeight = Number(this.pageHeightString.substring(0, this.pageHeightString.length-2))

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  update(event: Event) {
  }

  isHighlighted(page: number) {
    return page === Math.floor((window.scrollY + this.pageHeight / 2) / this.pageHeight) + 1
  }

  scroll(page: number) {
    window.scrollTo({top: (page - 1) * this.pageHeight, left: 0, behavior: "smooth"})
  }

}
