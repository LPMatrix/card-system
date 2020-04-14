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

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    exports: [
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatSortModule

    ]
})
export class AngularMaterialModule { }
