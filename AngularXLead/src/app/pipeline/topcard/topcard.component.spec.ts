import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcardComponent } from './topcard.component';

describe('TopcardComponent', () => {
  let component: TopcardComponent;
  let fixture: ComponentFixture<TopcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
