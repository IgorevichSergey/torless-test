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
  ) {}


  public create(component: any, data: Object = {}, cssClass?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.modal$.emit({ providers: data, component: component, cssClass: cssClass });

      this.closeModal$.subscribe((response?: any) => {
        this.closeModal$.observers.length = 0;
        if (response) {
          resolve(response);
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
