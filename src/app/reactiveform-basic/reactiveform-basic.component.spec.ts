import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformBasicComponent } from './reactiveform-basic.component';

describe('ReactiveformBasicComponent', () => {
  let component: ReactiveformBasicComponent;
  let fixture: ComponentFixture<ReactiveformBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
