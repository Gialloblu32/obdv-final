import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHisComponent } from './content-his.component';

describe('ContentHisComponent', () => {
  let component: ContentHisComponent;
  let fixture: ComponentFixture<ContentHisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentHisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
