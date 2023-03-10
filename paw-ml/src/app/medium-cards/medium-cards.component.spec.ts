import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumCardsComponent } from './medium-cards.component';

describe('MediumCardsComponent', () => {
  let component: MediumCardsComponent;
  let fixture: ComponentFixture<MediumCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
