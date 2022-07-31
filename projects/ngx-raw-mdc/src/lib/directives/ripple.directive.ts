import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MDCRipple } from '@material/ripple';


@Directive({
  selector: '[masMdcRipple]'
})
export class RippleDirective implements OnInit, OnDestroy {

  mdcRipple!: MDCRipple;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.mdcRipple = new MDCRipple(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.mdcRipple.destroy();
  }

}
