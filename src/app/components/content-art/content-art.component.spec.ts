import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentArtComponent } from './content-art.component';

describe('ContentArtComponent', () => {
  let component: ContentArtComponent;
  let fixture: ComponentFixture<ContentArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
