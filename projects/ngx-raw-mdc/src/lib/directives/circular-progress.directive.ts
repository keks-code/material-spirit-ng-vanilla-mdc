import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MDCCircularProgress } from '@material/circular-progress';


@Directive({
  selector: '[masMdcCircularProgress]'
})
export class MasMdcCircularProgressDirective implements OnInit, OnDestroy, AfterViewInit {

  mdcCircularProgress!: MDCCircularProgress;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.mdcCircularProgress = new MDCCircularProgress(this.el.nativeElement);
  }

  ngAfterViewInit() {
    //this.mdcDialog.open();
  }

  ngOnDestroy() {
    this.mdcCircularProgress.destroy();
  }

  // open(): void {
  //   this.mdcDialog.open();
  // }

}
