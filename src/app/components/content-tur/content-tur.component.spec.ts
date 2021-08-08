import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTurComponent } from './content-tur.component';

describe('ContentTurComponent', () => {
  let component: ContentTurComponent;
  let fixture: ComponentFixture<ContentTurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
