import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQComponent } from './create-q.component';

describe('CreateQComponent', () => {
  let component: CreateQComponent;
  let fixture: ComponentFixture<CreateQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
