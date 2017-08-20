
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { routing,appRoutingProviders }        from './app.routing';

import {DataTableModule} from "angular2-datatable";
//extra imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataFilterPipe }   from 'app/filter/data-filter.pipe';
import { AppComponent } from './app.component';
import { WorkflowInterviewComponent } from 'app/_component/workflow-interview/workflow-interview.component';
import  { WorkflowPeopleComponent } from 'app/_component/workflow-people/workflow-people.component'
import { WorkflowPlanetsComponent } from 'app/_component/workflow-planets/workflow-planets.component'
import  { WorkflowStarshipsComponent } from 'app/_component/workflow-starships/workflow-starships.component'
import { WorkflowListIDComponent } from 'app/_component/workflow-list-id/workflow-list-id.component'
import { WorkflowListAllComponent } from 'app/_component/workflow-list-all/workflow-list-all.component'
import { WorkFlowSharedService } from 'app/_service/sharedServices/WorkFlowSharedService';
import { WorkflowServiceService } from 'app/_service/workflowService/workflow-service.service';
@NgModule({
  declarations: [
    AppComponent,
    WorkflowInterviewComponent,
    WorkflowPeopleComponent,
    WorkflowPlanetsComponent,
    WorkflowStarshipsComponent,
    WorkflowListIDComponent,
    WorkflowListAllComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    DataTableModule,
    
  ],

             providers: [
                 appRoutingProviders,
                 WorkFlowSharedService,
                 WorkflowServiceService

                 // providers used to create fake backend
                /* fakeBackendProvider,
                 MockBackend,
                 BaseRequestOptions*/
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
