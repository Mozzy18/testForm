import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as data from "./data.json"


const PRODUCTS_URL = "http://localhost:3000/products";


@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        console.log('Intercepted request: ' + request.url);
        if (request.url === PRODUCTS_URL) {
            console.log('Loaded from JSON: ' + request.url);
            return of(new HttpResponse({ status: 200, body: ((data) as any).default }));
        }
        return next.handle(request);

    }
}