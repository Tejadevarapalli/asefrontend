import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeeComponent } from './homee.component';

describe('HomeeComponent', () => {
  let component: HomeeComponent;
  let fixture: ComponentFixture<HomeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
