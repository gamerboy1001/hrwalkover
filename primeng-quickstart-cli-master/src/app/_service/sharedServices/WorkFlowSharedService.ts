import {EventEmitter} from '@angular/core';

export class WorkFlowSharedService {
  moduleSelected: EventEmitter<String> = new EventEmitter();
  moduleSubNavSelected: EventEmitter<String> = new EventEmitter();
  constructor() {}
  
  emitModuleSelected(String) {
    this.moduleSelected.emit(String);
  }
  
   emitModuleSubNavSelected(String) {
    this.moduleSubNavSelected.emit(String);
  }
  
  
  getmoduleSubNavSelected() {
    return this.moduleSubNavSelected;
  }
  
    getModuleSelected() {
    return this.moduleSelected;
  }
  
 
}