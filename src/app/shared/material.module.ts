import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatStepperModule} from '@angular/material/stepper';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule} from '@angular/material/menu';
import { MatTabsModule} from '@angular/material/tabs';
import { MatChipsModule} from '@angular/material/chips';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatBadgeModule} from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule} from '@angular/material/radio';
import { MatListModule} from '@angular/material/list';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatStepperModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatTooltipModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
