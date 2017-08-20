import { Component, OnInit } from '@angular/core';
import { WorkFlowSharedService } from 'app/_service/sharedServices/WorkFlowSharedService';
import { Router } from '@angular/router';

@Component( {
    selector: 'app-workflow-planets',
    templateUrl: './workflow-planets.component.html',
    styleUrls: ['./workflow-planets.component.css']
} )
export class WorkflowPlanetsComponent implements OnInit {
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
