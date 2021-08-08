import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNatComponent } from './content-nat.component';

describe('ContentNatComponent', () => {
  let component: ContentNatComponent;
  let fixture: ComponentFixture<ContentNatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentNatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
