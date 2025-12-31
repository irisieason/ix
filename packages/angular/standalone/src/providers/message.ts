import { Injectable } from '@angular/core';
import { MessageConfig, TypedEvent } from '@irisieason/ix';
import { MessageService as BaseMessageService } from '@irisieason/ix-angular/common';

import { defineCustomElement } from '@irisieason/ix/components/ix-modal.js';
import { defineCustomElement as defineCustomElementModalFooter } from '@irisieason/ix/components/ix-modal-footer.js';

@Injectable({ providedIn: 'root' })
export class MessageService extends BaseMessageService {
  constructor() {
    super();

    defineCustomElement();
    // needs to be called as well here or wont be rendered correctly for angular production builds
    defineCustomElementModalFooter();
  }

  public override showMessage<T>(config: MessageConfig<T>): Promise<
    TypedEvent<{
      actionId: string;
      payload: T;
    }>
  > {
    return super.showMessage(config);
  }

  public override info(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return super.info(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  public override warning(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return super.warning(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  public override error(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return super.error(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  public override success(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return super.success(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }

  public override question(
    title: string,
    message: string,
    textOkay: string,
    textCancel?: string,
    payloadOkay?: any,
    payloadCancel?: any
  ) {
    return super.question(
      title,
      message,
      textOkay,
      textCancel,
      payloadOkay,
      payloadCancel
    );
  }
}

