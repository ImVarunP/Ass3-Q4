import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellouscomComponent } from './marvellouscom.component';

describe('MarvellouscomComponent', () => {
  let component: MarvellouscomComponent;
  let fixture: ComponentFixture<MarvellouscomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvellouscomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellouscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
