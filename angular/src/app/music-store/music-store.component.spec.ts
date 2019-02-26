import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicStoreComponent } from './music-store.component';

describe('MusicStoreComponent', () => {
  let component: MusicStoreComponent;
  let fixture: ComponentFixture<MusicStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
