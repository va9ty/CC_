
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowFormComponent } from './overflow-form.component';

describe('OverflowFormComponent', () => {
  let component: OverflowFormComponent;
  let fixture: ComponentFixture<OverflowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverflowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
