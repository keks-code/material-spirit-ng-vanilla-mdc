import { Directive, ElementRef } from '@angular/core';
import { MDCTopAppBar } from '@material/top-app-bar';

@Directive({
  selector: '[masMdcTopAppBar]'
})
export class TopAppBarDirective {

  mdcTopAppBar!: MDCTopAppBar;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.mdcTopAppBar = new MDCTopAppBar(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.mdcTopAppBar.destroy();
  }

}
