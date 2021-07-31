import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamboyaComponent } from './camboya.component';

describe('CamboyaComponent', () => {
  let component: CamboyaComponent;
  let fixture: ComponentFixture<CamboyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamboyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamboyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
