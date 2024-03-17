import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogCategoryComponent } from './confirmation-dialog-category.component';

describe('ConfirmationDialogCategoryComponent', () => {
  let component: ConfirmationDialogCategoryComponent;
  let fixture: ComponentFixture<ConfirmationDialogCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDialogCategoryComponent]
    });
    fixture = TestBed.createComponent(ConfirmationDialogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
