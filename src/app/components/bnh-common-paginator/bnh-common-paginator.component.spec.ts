import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnhCommonPaginatorComponent } from './bnh-common-paginator.component';

describe('BnhCommonPaginatorComponent', () => {
  let component: BnhCommonPaginatorComponent;
  let fixture: ComponentFixture<BnhCommonPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnhCommonPaginatorComponent]
    });
    fixture = TestBed.createComponent(BnhCommonPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
