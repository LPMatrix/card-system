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

@NgModule({
    exports: [
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class AngularMaterialModule { }
