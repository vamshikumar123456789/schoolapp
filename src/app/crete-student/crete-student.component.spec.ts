import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteStudentComponent } from './crete-student.component';

describe('CreteStudentComponent', () => {
  let component: CreteStudentComponent;
  let fixture: ComponentFixture<CreteStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreteStudentComponent]
    });
    fixture = TestBed.createComponent(CreteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
