import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    //this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false);
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}

