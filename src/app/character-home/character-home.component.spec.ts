import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterHomeComponent } from './character-home.component';

describe('CharacterHomeComponent', () => {
  let component: CharacterHomeComponent;
  let fixture: ComponentFixture<CharacterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
