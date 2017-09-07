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


  public create(component: any, data: Object = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const _modalData: { providers: ResolvedReflectiveProvider[], component: any } = this.__modalData(component, data);

      this.modal$.emit(_modalData);

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
  private __modalData(component: any, data?: Object): { providers: ResolvedReflectiveProvider[], component: any } {
    const inputProviders: {provide: string; useValue: any}[] = Object.keys(data).map((key) => { return { provide: key, useValue: data[key] }; });
    // const factory = this.resolver.resolveComponentFactory(component);

    return {
      providers: ReflectiveInjector.resolve(inputProviders),
      component: component
    };
  }

}
