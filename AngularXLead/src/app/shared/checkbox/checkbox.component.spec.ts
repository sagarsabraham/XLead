import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: TableCheckboxComponent;
  let fixture: ComponentFixture<TableCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
