/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkflowServiceService } from './workflow-service.service';

describe('WorkflowServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowServiceService]
    });
  });

  it('should ...', inject([WorkflowServiceService], (service: WorkflowServiceService) => {
    expect(service).toBeTruthy();
  }));
});
