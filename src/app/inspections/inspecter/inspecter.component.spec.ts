import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecterComponent } from './inspecter.component';

describe('InspecterComponent', () => {
  let component: InspecterComponent;
  let fixture: ComponentFixture<InspecterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspecterComponent]
    });
    fixture = TestBed.createComponent(InspecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
