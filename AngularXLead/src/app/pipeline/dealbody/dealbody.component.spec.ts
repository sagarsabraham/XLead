import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealbodyComponent } from './dealbody.component';

describe('DealbodyComponent', () => {
  let component: DealbodyComponent;
  let fixture: ComponentFixture<DealbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealbodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
