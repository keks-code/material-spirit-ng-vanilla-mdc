import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MDCDialog } from '@material/dialog';


@Directive({
  selector: '[masMdcDialog]'
})
export class MasMdcDialogDirective implements OnInit, OnDestroy, AfterViewInit {

  mdcDialog!: MDCDialog;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.mdcDialog = new MDCDialog(this.el.nativeElement);
  }

  ngAfterViewInit() {
    //this.mdcDialog.open();
  }

  ngOnDestroy() {
    this.mdcDialog.destroy();
  }

  // open(): void {
  //   this.mdcDialog.open();
  // }

}
