import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quick-nominate',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule
  ],
  template: `
    <form [formGroup]="nominationForm" (ngSubmit)="onSubmit()">
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Colleague Name</mat-label>
        <input matInput formControlName="colleague" [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option *ngFor="let colleague of colleagues" [value]="colleague">
            {{colleague}}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Award Type</mat-label>
        <mat-select formControlName="awardType">
          <mat-option *ngFor="let award of awards" [value]="award">
            {{award}}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Reason</mat-label>
        <textarea matInput formControlName="reason" rows="3"></textarea>
      </mat-form-field>

      <button mat-raised-button color="primary" type="submit"
              [disabled]="!nominationForm.valid">
        Nominate
      </button>
    </form>
  `,
  styles: [`
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
  `]
})
export class QuickNominateComponent {
  nominationForm: FormGroup;

  // Mock data - should come from a service
  colleagues = ['John Doe', 'Jane Smith', 'Mike Johnson'];
  awards = ['Innovation Award', 'Team Spirit Award', 'Leadership Award'];

  constructor(private fb: FormBuilder) {
    this.nominationForm = this.fb.group({
      colleague: ['', Validators.required],
      awardType: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.nominationForm.valid) {
      console.log(this.nominationForm.value);
      // Submit nomination logic here
    }
  }
}
