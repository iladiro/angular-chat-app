import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowRowComponent } from './window-row.component';

describe('WindowRowComponent', () => {
  let component: WindowRowComponent;
  let fixture: ComponentFixture<WindowRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
