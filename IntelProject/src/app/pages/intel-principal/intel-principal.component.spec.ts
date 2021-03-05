import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelPrincipalComponent } from './intel-principal.component';

describe('IntelPrincipalComponent', () => {
  let component: IntelPrincipalComponent;
  let fixture: ComponentFixture<IntelPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
