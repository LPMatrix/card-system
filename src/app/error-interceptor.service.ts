
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ErrorComponent } from './error/error.component';

// import { MatDialog } from '@angular/material';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
    constructor() {}
    intercept(req : HttpRequest<any>, next: HttpHandler) {
        
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = "orry, we couldn't complete your request. Please try again in a moment.";
                if(error.error.message){
                    errorMessage = error.error.message;
                }
                window.alert(errorMessage);
                return throwError(error)
            })
        );
    }
}