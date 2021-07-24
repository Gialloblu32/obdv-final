import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicMenuComponent } from './pic-menu.component';

describe('PicMenuComponent', () => {
  let component: PicMenuComponent;
  let fixture: ComponentFixture<PicMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
