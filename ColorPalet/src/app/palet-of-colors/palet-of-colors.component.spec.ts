import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletOfColorsComponent } from './palet-of-colors.component';

describe('PaletOfColorsComponent', () => {
  let component: PaletOfColorsComponent;
  let fixture: ComponentFixture<PaletOfColorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaletOfColorsComponent]
    });
    fixture = TestBed.createComponent(PaletOfColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
