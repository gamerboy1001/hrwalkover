import { Component, OnInit } from '@angular/core';
import { WorkFlowSharedService } from 'app/_service/sharedServices/WorkFlowSharedService';
import { Router } from '@angular/router';
import { WorkflowServiceService } from 'app/_service/workflowService/workflow-service.service';

@Component({
  selector: 'app-workflow-list-id',
  templateUrl: './workflow-list-id.component.html',
  styleUrls: ['./workflow-list-id.component.css']
})
export class WorkflowListIDComponent implements OnInit {
    public response: any = {};
public results =[];
public numberOfiteration = [];
public selectOption : String;
    moduleSelectedSubscription: any;
subNavModuleSelectedSubscription: any;
moduleSelected: String;
subNavModuleSelected: String;

constructor( private router: Router, private workFlowSharedService: WorkFlowSharedService,private workflowServiceService:WorkflowServiceService ) { 
    for (var _i = 1; _i == 10; _i++) {
        this.numberOfiteration.push(_i); 
    }
    this.selectOption = "Select"
    this.moduleSelectedSubscription = this.workFlowSharedService.getModuleSelected().subscribe( moduleSelected => this.setmoduleSelected( moduleSelected ) );
    this.subNavModuleSelectedSubscription = this.workFlowSharedService.getmoduleSubNavSelected().subscribe( subNavModuleSelected => this.setSubNavModuleSelected( subNavModuleSelected ) );
}

ngOnInit() {
    
}

loadElementOnBasisOFID(value){

    
    this.workflowServiceService.updateMyShopOnID(value) .subscribe(
            model => {
                this.response = model;
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

hideTable(){
    if(this.selectOption == 'Select'){
        return true;
    }
    return false;
}

ngOnDestroy() {
    this.moduleSelectedSubscription.unsubscribe();
    this.subNavModuleSelectedSubscription.unsubscribe();
  }
}
