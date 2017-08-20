import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkFlowSharedService } from 'app/_service/sharedServices/WorkFlowSharedService';
@Component( {
    selector: 'app-workflow-people',
    templateUrl: './workflow-people.component.html',
    styleUrls: ['./workflow-people.component.css']
} )
export class WorkflowPeopleComponent implements OnInit {
    moduleSelectedSubscription: any;
    subNavModuleSelectedSubscription: any;
    moduleSelected: String;
    subNavModuleSelected: String;

    constructor(private router: Router, private workFlowSharedService: WorkFlowSharedService ) { }

    ngOnInit() {
        this.moduleSelectedSubscription = this.workFlowSharedService.getmoduleSubNavSelected().subscribe( moduleSelected => this.setmoduleSelected( moduleSelected ) );
        this.subNavModuleSelectedSubscription = this.workFlowSharedService.getModuleSelected().subscribe( subNavModuleSelected => this.setSubNavModuleSelected( subNavModuleSelected ) );
        this.router.navigate( ['/displayAll'] );
    }

    setmoduleSelected( _moduleSelected: String ) {
        this.moduleSelected = _moduleSelected;
    }

    setSubNavModuleSelected( _subNavModuleSelected: String ) {
        this.subNavModuleSelected = _subNavModuleSelected;
    }
}
