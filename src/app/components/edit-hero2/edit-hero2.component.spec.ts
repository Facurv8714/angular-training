import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHero2Component } from './edit-hero2.component';

describe('EditHero2Component', () => {
  let component: EditHero2Component;
  let fixture: ComponentFixture<EditHero2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHero2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
