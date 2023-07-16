import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementModuleComponent } from './user-management-module.component';

describe('UserManagementModuleComponent', () => {
  let component: UserManagementModuleComponent;
  let fixture: ComponentFixture<UserManagementModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementModuleComponent]
    });
    fixture = TestBed.createComponent(UserManagementModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
