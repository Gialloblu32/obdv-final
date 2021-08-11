import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPicComponent } from './fav-pic.component';

describe('FavPicComponent', () => {
  let component: FavPicComponent;
  let fixture: ComponentFixture<FavPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
