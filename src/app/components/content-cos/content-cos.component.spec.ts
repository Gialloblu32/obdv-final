import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCosComponent } from './content-cos.component';

describe('ContentCosComponent', () => {
  let component: ContentCosComponent;
  let fixture: ComponentFixture<ContentCosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
