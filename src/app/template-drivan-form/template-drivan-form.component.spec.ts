import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivanFormComponent } from './template-drivan-form.component';

describe('TemplateDrivanFormComponent', () => {
  let component: TemplateDrivanFormComponent;
  let fixture: ComponentFixture<TemplateDrivanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
