import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MDCTextField } from '@material/textfield';


@Directive({
  selector: '[masMdcTextField]'
})
export class TextFieldDirective implements OnInit, OnDestroy {

  mdcTextField!: MDCTextField;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.mdcTextField = new MDCTextField(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.mdcTextField.destroy();
  }

}
