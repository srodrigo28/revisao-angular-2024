import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component02Component } from './component02.component';

describe('Component02Component', () => {
  let component: Component02Component;
  let fixture: ComponentFixture<Component02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Component02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
