import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerPadresComponent } from './taller-padres.component';

describe('TallerPadresComponent', () => {
  let component: TallerPadresComponent;
  let fixture: ComponentFixture<TallerPadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallerPadresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TallerPadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
