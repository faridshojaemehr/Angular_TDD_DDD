import { TestBed } from '@angular/core/testing';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastService } from './toast-service.service';

describe('ToastServiceService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [MatSnackBarModule],
    });
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
