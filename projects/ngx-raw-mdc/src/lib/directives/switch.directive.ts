import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MDCSwitch } from '@material/switch';


@Directive({
  selector: '[masMdcSwitch]'
})
export class MasMdcSwitchDirective implements OnInit, OnDestroy {

  mdcSwitch!: MDCSwitch;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.mdcSwitch = new MDCSwitch(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.mdcSwitch.destroy();
  }

}
