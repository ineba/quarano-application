import { TokenService } from '@qro/auth/domain';
import { BadRequestService } from '@qro/shared/ui-error';
import { TranslateTestingModule } from '@qro/shared/util-translation';
import { AuthStore } from '@qro/auth/domain';
import { AuthService } from '@qro/auth/api';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { EnrollmentService } from '@qro/client/domain';
import { TranslatedSnackbarService } from '@qro/shared/util-snackbar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ValidationErrorService } from '@qro/shared/util-forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RegisterComponent],
        imports: [RouterTestingModule, TranslateTestingModule],
        providers: [
          { provide: EnrollmentService, useValue: {} },
          { provide: AuthService, useValue: {} },
          { provide: BadRequestService, useValue: {} },
          { provide: TokenService, useValue: {} },
          { provide: ValidationErrorService, useValue: { getErrorKeys: () => [] } },
          { provide: AuthStore, useValue: {} },
          { provide: TranslatedSnackbarService, useValue: { warning: () => {}, success: () => {} } },
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                paramMap: {
                  get: () => '',
                },
              },
            },
          },
          { provide: MatDialog, useValue: {} },
        ],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
