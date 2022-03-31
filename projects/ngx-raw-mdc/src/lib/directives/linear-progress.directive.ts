import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MDCLinearProgress } from '@material/linear-progress';


@Directive({
  selector: '[masMdcLinearProgress]'
})
export class MasMdcLinearProgressDirective implements OnInit, OnDestroy {

  mdcLinearProgress!: MDCLinearProgress;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.mdcLinearProgress = new MDCLinearProgress(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.mdcLinearProgress.destroy();
  }
}
