import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnIfComponent } from './learn-if.component';

describe('LearnIfComponent', () => {
  let component: LearnIfComponent;
  let fixture: ComponentFixture<LearnIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
