import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CResultsComponent } from './c-results.component';

describe('CResultsComponent', () => {
  let component: CResultsComponent;
  let fixture: ComponentFixture<CResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
