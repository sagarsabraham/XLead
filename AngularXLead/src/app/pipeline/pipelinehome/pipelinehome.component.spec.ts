import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinehomeComponent } from './pipelinehome.component';

describe('PipelinehomeComponent', () => {
  let component: PipelinehomeComponent;
  let fixture: ComponentFixture<PipelinehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipelinehomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelinehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
