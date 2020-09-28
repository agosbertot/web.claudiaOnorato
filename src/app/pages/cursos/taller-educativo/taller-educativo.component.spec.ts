import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerEducativoComponent } from './taller-educativo.component';

describe('TallerEducativoComponent', () => {
  let component: TallerEducativoComponent;
  let fixture: ComponentFixture<TallerEducativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallerEducativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TallerEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
