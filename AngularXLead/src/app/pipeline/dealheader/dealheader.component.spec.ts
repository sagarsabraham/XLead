import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealheaderComponent } from './dealheader.component';

describe('DealheaderComponent', () => {
  let component: DealheaderComponent;
  let fixture: ComponentFixture<DealheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
