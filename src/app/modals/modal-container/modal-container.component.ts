import {
  Component, Input, OnInit,
  ViewContainerRef, ViewChild, ReflectiveInjector,
  ComponentFactoryResolver, ElementRef, Renderer,
  ResolvedReflectiveProvider, ComponentFactory
} from '@angular/core';

import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { TimeSelectModalComponent } from '../time-select-modal/time-select-modal.component';

import { ModalService } from '../../services';

@Component({
  selector: 'app-modal-container',
  entryComponents: [ConfirmModalComponent, TimeSelectModalComponent],
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent {
  currentComponent: any = null;
  public cssClass: string;

  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer: ViewContainerRef;
  @ViewChild('modalCover') modalCover: ElementRef;
  @ViewChild('modalContext') modalContext: ElementRef;


  constructor(
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer,
    private modalService: ModalService
  ) {
    modalService.modal$.subscribe((modalData: { providers: Object, component: any, cssClass: string }) => {
      this.__prepareModal({
        providers: modalData.providers,
        component: modalData.component
      });
      this.cssClass = modalData.cssClass;
      this.__makeVisible();

      modalService.closeModal$.subscribe(() => {
        this.__makeHidden();
        this.cssClass = '';
      });
    });


  }

  private __prepareModal(options: { providers: Object, component: any }): void {
    const injector = ReflectiveInjector.fromResolvedProviders([], this.modalContainer.parentInjector),
          factory = this.resolver.resolveComponentFactory(options.component),
           // Create the component using the factory and the injector
          createdComponent = factory.create(injector);

    for (const key in options.providers) {
      (createdComponent.instance as any)[key] = options.providers[key];
    }


    // Insert the component into the dom container
    this.modalContainer.insert(createdComponent.hostView);

    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = createdComponent;
  }

  private __makeVisible(): void {
    this.renderer.setElementClass(this.modalCover.nativeElement, 'visible', true);

    setTimeout((() => {
      this.renderer.setElementClass(this.modalContext.nativeElement, 'visible', true);
    }).bind(this), 10);
  }

  private __makeHidden(): void {
    this.renderer.setElementClass(this.modalContext.nativeElement, 'visible', false);

    setTimeout((() => {
      this.renderer.setElementClass(this.modalCover.nativeElement, 'visible', false);
      this.currentComponent.destroy();
      this.currentComponent = null;
    }).bind(this), 200);
  }

}
