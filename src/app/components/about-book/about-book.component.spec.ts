import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBookComponent } from './about-book.component';

describe('AboutBookComponent', () => {
  let component: AboutBookComponent;
  let fixture: ComponentFixture<AboutBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
