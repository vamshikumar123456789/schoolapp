import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSudentsComponent } from './all-sudents.component';

describe('AllSudentsComponent', () => {
  let component: AllSudentsComponent;
  let fixture: ComponentFixture<AllSudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSudentsComponent]
    });
    fixture = TestBed.createComponent(AllSudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
