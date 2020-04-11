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

@NgModule({
    exports: [
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class AngularMaterialModule { }
