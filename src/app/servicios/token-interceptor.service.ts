import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token='daec5eb62b62b3db50ad864bdd9fdc6ef23d9d9e5f537fc37eada5363ce012d5';
    let jwtToken=req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    })
    return next.handle(jwtToken);
  }
}
