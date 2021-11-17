import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOptionsComponent } from './choose-options.component';

describe('ChooseOptionsComponent', () => {
  let component: ChooseOptionsComponent;
  let fixture: ComponentFixture<ChooseOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
