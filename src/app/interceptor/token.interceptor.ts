import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { AuthService } from '../modules/auth';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private commonService: CommonService,
    private router: Router,
    private authService : AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authData = this.authService.getAuthFromLocalStorage();
    if (
      authData === undefined
    ) {
      this.router.navigateByUrl('/auth/login');
    } else {
      const token = authData?.data?.token;
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    } 
    return next.handle(request);
  }
}

export const tokenInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};
