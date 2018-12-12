import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'tp-tuke-custom-element',
  templateUrl: './tuke-custom-element.component.html',
  styleUrls: ['./tuke-custom-element.component.css']
})
export class TukeCustomElementComponent implements OnInit {

  public message: string;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.message = '';
  }

  @HostListener('document:new-message', ['$event'])
  handleNewMessageEvent(customEvent: CustomEvent) {
    this.message = customEvent.detail;
    this.changeDetector.detectChanges();
    setTimeout(() => {
      this.message = '';
      this.changeDetector.detectChanges();
    }, 3000);
  }

  sendMessage() {
    document.dispatchEvent(new CustomEvent('new-message', {detail: 'Message from Angular custom element'}));
  }
}
