import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchOnlineComponent } from './watch-online.component';

describe('WatchOnlineComponent', () => {
  let component: WatchOnlineComponent;
  let fixture: ComponentFixture<WatchOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
