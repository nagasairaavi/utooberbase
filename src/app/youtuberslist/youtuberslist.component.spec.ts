import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutuberslistComponent } from './youtuberslist.component';

describe('YoutuberslistComponent', () => {
  let component: YoutuberslistComponent;
  let fixture: ComponentFixture<YoutuberslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutuberslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutuberslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
