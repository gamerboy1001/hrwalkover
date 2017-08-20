import { Component, OnInit } from '@angular/core';
import { WorkFlowSharedService } from 'app/_service/sharedServices/WorkFlowSharedService';
import { Router } from '@angular/router';
import { WorkflowServiceService } from 'app/_service/workflowService/workflow-service.service';

@Component({
  selector: 'app-workflow-list-all',
  templateUrl: './workflow-list-all.component.html',
  styleUrls: ['./workflow-list-all.component.css']
})
export class WorkflowListAllComponent implements OnInit {
    public response: any = {};
public results =[];

    moduleSelectedSubscription: any;
subNavModuleSelectedSubscription: any;
moduleSelected: String;
subNavModuleSelected: String;

constructor( private router: Router, private workFlowSharedService: WorkFlowSharedService,private workflowServiceService:WorkflowServiceService ) { 
    
    this.moduleSelectedSubscription = this.workFlowSharedService.getModuleSelected().subscribe( moduleSelected => this.setmoduleSelected( moduleSelected ) );
    this.subNavModuleSelectedSubscription = this.workFlowSharedService.getmoduleSubNavSelected().subscribe( subNavModuleSelected => this.setSubNavModuleSelected( subNavModuleSelected ) );
}

ngOnInit() {
   
   this.workflowServiceService.updateMyShop() .subscribe(
           model => {
               this.response = model;
               this.results = model.results;
               var string = 'check server response';
           },
           error => {
             console.log(error);
           });
}

setmoduleSelected( _moduleSelected: String ) {
    this.moduleSelected = _moduleSelected;
}

setSubNavModuleSelected( _subNavModuleSelected: String ) {
    this.subNavModuleSelected = _subNavModuleSelected;
}

ngOnDestroy() {
    this.moduleSelectedSubscription.unsubscribe();
    this.subNavModuleSelectedSubscription.unsubscribe();
  }
}
