import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaedersearchComponent } from './haedersearch.component';

describe('HaedersearchComponent', () => {
  let component: HaedersearchComponent;
  let fixture: ComponentFixture<HaedersearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaedersearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaedersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
