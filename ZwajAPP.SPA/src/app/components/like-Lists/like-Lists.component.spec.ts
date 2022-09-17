/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LikeListsComponent } from './like-Lists.component';

describe('LikeListsComponent', () => {
  let component: LikeListsComponent;
  let fixture: ComponentFixture<LikeListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
