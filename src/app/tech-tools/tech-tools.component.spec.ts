import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechToolsComponent } from './tech-tools.component';

describe('TechToolsComponent', () => {
  let component: TechToolsComponent;
  let fixture: ComponentFixture<TechToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechToolsComponent]
    });
    fixture = TestBed.createComponent(TechToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
