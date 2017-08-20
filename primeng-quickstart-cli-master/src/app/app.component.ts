import { Component,ElementRef,Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkFlowSharedService } from 'app/_service/sharedServices/WorkFlowSharedService';
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    cssSelector : String[] ;
    cssSubNavSelector : String[];
   
constructor(private router: Router, private workFlowSharedService:WorkFlowSharedService) {
    this.cssSelector =['No','No','No'];
    this.cssSubNavSelector =['No','No'];
    this.workFlowSharedService.emitModuleSelected('people');
    this.workFlowSharedService.emitModuleSubNavSelected('All');
    this.router.navigate( ['/people'] );
}

ngOnInit() {
   
   
}

moduleSelectedFunc( value ) {
    if ( value == 'PP' ) {
        this.cssSelector = ['active', 'No', 'No'];
        this.cssSubNavSelector =['active','No'];
        this.workFlowSharedService.emitModuleSelected('people');
        this.workFlowSharedService.emitModuleSubNavSelected('All');
        this.router.navigate( ['/people'] );
    }
    if ( value == 'PL' ) {
        this.cssSelector = ['No', 'active', 'No'];
        this.cssSubNavSelector =['active','No'];
        this.workFlowSharedService.emitModuleSelected('planets');
        this.workFlowSharedService.emitModuleSubNavSelected('All');
        this.router.navigate( ['/planets'] );
    }
    if ( value == 'SS' ) {
        this.cssSelector = ['Np', 'No', 'active'];
        this.cssSubNavSelector =['active','No'];
        this.workFlowSharedService.emitModuleSelected('starships');
        this.workFlowSharedService.emitModuleSubNavSelected('All');
        this.router.navigate( ['/starship'] );
    }
   
}

subNavSelected(value) {
    if ( value == 'LA' ) {
        this.cssSubNavSelector =['active','No'];
        this.workFlowSharedService.emitModuleSubNavSelected('All');
        this.router.navigate( ['/displayAll'] );
    }
    if ( value == 'LI' ) {
        this.cssSubNavSelector =['No','active'];
        this.workFlowSharedService.emitModuleSubNavSelected('ID');
        this.router.navigate( ['/displayById'] );
    }
}

}