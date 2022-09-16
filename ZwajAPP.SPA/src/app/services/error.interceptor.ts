import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
      intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse) => {
                if(error instanceof HttpErrorResponse){
                    const applicationError = error.headers.get('Application-Error');
                    if(applicationError){
                        console.error(applicationError);
                        return throwError(()=>applicationError);
                    }
                    ///ModelState Errors
                    const serverError:[] = error.error.errors;
                    let modelStateErrors ='';
                    
                    if(serverError && typeof serverError==='object'){
                        for (const key in serverError) {
                            if(serverError[key]){
                                modelStateErrors += serverError[key] + '\n';
                            }
                        }
                        return throwError(()=>{return modelStateErrors});
                    }
                    //Unauthorized errors
                    if(error.status===401){
                        //console.log(error.statusText);
                        return throwError(()=>error.statusText);
                    }

                    return throwError(()=>{modelStateErrors || serverError || 'Server Error'});
                }
                return throwError(()=>{});


            })
        )
    }
}
export const ErrorInterceptorProvidor={
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true
}



