import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MDCBanner } from '@material/banner';


@Directive({
  selector: '[masMdcBanner]'
})
export class MasMdcBannerDirective implements OnInit, OnDestroy {

  mdcBanner!: MDCBanner;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.mdcBanner = new MDCBanner(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.mdcBanner.destroy();
  }
}
