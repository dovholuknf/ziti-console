/*
    Copyright NetFoundry Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss']
})
export class FormHeaderComponent {
  @Input() data: any = {};
  @Input() title = '';
  @Input() moreActions: any = [];
  @Input() formView = 'simple';
  @Input() saveDisabled = false;
  @Input() saveTooltip = '';

  @Output() formViewChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() actionRequested: EventEmitter<any> = new EventEmitter<any>();


  showActionsDropDown = false;

  constructor() {}

  requestAction(action, data?: any) {
    if (action === 'toggle-view') {
      if (data === 'simple') {
        this.formView = 'raw';
      } else {
        this.formView = 'simple';
      }
      data = this.formView;
      this.formViewChange.emit();
    }
    this.actionRequested.emit({name: action, data: data})
    this.showActionsDropDown = false;
  }

  showMoreActions() {
    this.showActionsDropDown = true;
  }

  closeActionsMoreActions() {
    this.showActionsDropDown = false;
  }
}
