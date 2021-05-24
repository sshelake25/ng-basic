import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer rw;lrejtlerltr'ytrytkytluytlujyukt`,
        Apple:'kahaksdfhdkss;gdfmjferg'
      }
    });

    return next.handle(request);
  }

}
