import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFotComponent } from './content-fot.component';

describe('ContentFotComponent', () => {
  let component: ContentFotComponent;
  let fixture: ComponentFixture<ContentFotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
