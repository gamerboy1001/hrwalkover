import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { WorkFlowSharedService } from 'app/_service/sharedServices/WorkFlowSharedService';

@Injectable()
export class WorkflowServiceService {
    moduleSelectedSubscription: any;
subNavModuleSelectedSubscription: any;
moduleSelected: String;
subNavModuleSelected: String;
  constructor(private http: Http,private workFlowSharedService: WorkFlowSharedService) {
      
      this.moduleSelectedSubscription = this.workFlowSharedService.getModuleSelected().subscribe( moduleSelected => this.setmoduleSelected( moduleSelected ) );
      this.subNavModuleSelectedSubscription = this.workFlowSharedService.getmoduleSubNavSelected().subscribe( subNavModuleSelected => this.setSubNavModuleSelected( subNavModuleSelected ) );

      
      
  }
  
  setmoduleSelected( _moduleSelected: String ) {
      this.moduleSelected = _moduleSelected;
  }

  setSubNavModuleSelected( _subNavModuleSelected: String ) {
      this.subNavModuleSelected = _subNavModuleSelected;
  }

  updateMyShop(){
  var headers = new Headers();
  if(this.subNavModuleSelected == 'All'){
  var URL = 'https://swapi.co/api/'+this.moduleSelected+'/';
  } else{
      var URL = 'https://swapi.co/api/'+this.moduleSelected+'/'+this.subNavModuleSelected+'/';
  }
  headers.set('Content-Type', 'application/json');
  //return this.http.post('http://localhost:1006/jsflab/rest/OwnerRegistration/ownerregistration', { headers })
  //  .map(res => res.json());
  return this.http.get(URL).map((response: Response) => response.json());
      
  }
  
  updateMyShopOnID(value){
      var headers = new Headers();
      var URL = 'https://swapi.co/api/'+this.moduleSelected+'/'+value+'/';
      headers.set('Content-Type', 'application/json');
      //return this.http.post('http://localhost:1006/jsflab/rest/OwnerRegistration/ownerregistration', { headers })
      //  .map(res => res.json());
      return this.http.get(URL).map((response: Response) => response.json());
  }
  
}
