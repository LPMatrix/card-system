
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';

// import { MatDialog } from '@angular/material';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
    constructor(private dialog : MatDialog) {}
    intercept(req : HttpRequest<any>, next: HttpHandler) {
        
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = "Sorry, we couldn't complete your request. Please try again in a moment.";
                if(error.error.message){
                    errorMessage = error.error.message;
                }
                // window.alert(errorMessage);
                this.dialog.open(ErrorComponent, {data : {message: errorMessage}});
                return throwError(error);
            })
        );
    }
}