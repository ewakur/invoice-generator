import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
})
export class ErrorHandleComponent {
  @Input() formControlInputErrors: ValidationErrors | null | undefined;
}
