import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtFormComponent } from './art-form.component';

describe('ArtFormComponent', () => {
  let component: ArtFormComponent;
  let fixture: ComponentFixture<ArtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
