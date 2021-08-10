import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RusiaComponent } from './rusia.component';

describe('RusiaComponent', () => {
  let component: RusiaComponent;
  let fixture: ComponentFixture<RusiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RusiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RusiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
