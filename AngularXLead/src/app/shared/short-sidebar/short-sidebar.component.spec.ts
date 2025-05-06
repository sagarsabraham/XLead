import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortSidebarComponent } from './short-sidebar.component';

describe('ShortSidebarComponent', () => {
  let component: ShortSidebarComponent;
  let fixture: ComponentFixture<ShortSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
