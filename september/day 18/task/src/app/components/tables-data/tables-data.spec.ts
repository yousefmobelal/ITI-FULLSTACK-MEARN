import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesData } from './tables-data';

describe('TablesData', () => {
  let component: TablesData;
  let fixture: ComponentFixture<TablesData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
