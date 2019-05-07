import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymodelsComponent } from './mymodels.component';

describe('MymodelsComponent', () => {
  let component: MymodelsComponent;
  let fixture: ComponentFixture<MymodelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymodelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
