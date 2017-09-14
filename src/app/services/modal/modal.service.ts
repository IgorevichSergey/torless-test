import { Injectable, EventEmitter, ComponentFactoryResolver, ComponentFactory, ReflectiveInjector, ResolvedReflectiveProvider } from '@angular/core';

// import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';
// import { TimeSelectModalComponent } from '../../modals/time-select-modal/time-select-modal.component';

@Injectable()
export class ModalService {
  modal$: EventEmitter<any> = new EventEmitter();
  actions$: EventEmitter<any> = new EventEmitter();

  closeModal$: EventEmitter<any> = new EventEmitter();

  constructor(
    private resolver: ComponentFactoryResolver
  ) {

    console.log('service error')
  }


  public create(component: any, data: Object = {}, cssClass?: string): Promise<any> {
    console.log('component', component)
    return new Promise((resolve, reject) => {
      this.modal$.emit({ providers: data, component: component, cssClass: cssClass });

      this.closeModal$.subscribe((response?: boolean) => {
        this.closeModal$.observers.length = 0;
        if (response) {
          resolve();
        } else {
          reject();
        }
      });
    });

  }

  public close() {

  }


  ///
}
