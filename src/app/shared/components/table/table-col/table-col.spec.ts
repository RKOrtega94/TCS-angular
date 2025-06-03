import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCol } from './table-col';

describe('TableCol', () => {
  let component: TableCol;
  let fixture: ComponentFixture<TableCol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
