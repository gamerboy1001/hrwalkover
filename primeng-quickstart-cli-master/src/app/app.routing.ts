import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { WorkflowInterviewComponent } from 'app/_component/workflow-interview/workflow-interview.component';
import  { WorkflowPeopleComponent } from 'app/_component/workflow-people/workflow-people.component'
import { WorkflowPlanetsComponent } from 'app/_component/workflow-planets/workflow-planets.component'
import  { WorkflowStarshipsComponent } from 'app/_component/workflow-starships/workflow-starships.component'
import { WorkflowListIDComponent } from 'app/_component/workflow-list-id/workflow-list-id.component'
import { WorkflowListAllComponent } from 'app/_component/workflow-list-all/workflow-list-all.component'

const appRoutes: Routes = [
   { path: '', component: WorkflowListAllComponent},
    { path: 'people', component:WorkflowPeopleComponent  },
    { path: 'planets', component:WorkflowPlanetsComponent  },
    { path: 'starship', component:WorkflowStarshipsComponent  },
    { path: 'displayAll', component:WorkflowListAllComponent  },
    { path: 'displayById', component:WorkflowListIDComponent  },
    { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);