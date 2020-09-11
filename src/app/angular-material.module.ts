import { NgModule } from '@angular/core';
import {
    MatDialogModule
} from '@angular/material/dialog';

import {
    MatProgressSpinnerModule
} from '@angular/material/progress-spinner';

import {
    MatButtonModule
} from '@angular/material/button';
import {
    MatInputModule
} from '@angular/material/input';

import { 
	MatTableModule
	 } from '@angular/material/table';

import { 
	MatToolbarModule 
} from '@angular/material/toolbar';

import {CdkTableModule} from '@angular/cdk/table';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    exports: [
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        CdkTableModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule

    ]
})
export class AngularMaterialModule { }
