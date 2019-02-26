import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLeadershipComponent } from './about-leadership.component';

describe('AboutLeadershipComponent', () => {
  let component: AboutLeadershipComponent;
  let fixture: ComponentFixture<AboutLeadershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLeadershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
