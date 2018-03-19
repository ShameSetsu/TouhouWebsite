import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class Api {
    baseUrl: string = 'http://85.169.114.204:3000/api'; // RASBERRY HOST
    // baseUrl: string = 'http://localhost:3000/api'; // LOCAL

    constructor(private http: Http) {}

    post(endpoint: string, body: any, reqOpts?: any): Promise<any>{
        return new Promise<any>((resolve, reject)=>{
            return this.http.post(this.baseUrl + endpoint, body, reqOpts).subscribe(res=>{
                console.log('POST', res);
                resolve(res);
            }, err=>{
                console.error('POST', err);
                reject(err);
            });
        });
    }

    get(endpoint, reqOpts?: any){
        return new Promise<any>((resolve, reject)=>{
            return this.http.get(this.baseUrl + endpoint, reqOpts).subscribe((res: any)=>{
                console.log('GET', res);
                resolve(JSON.parse(res._body));
            }, err=>{
                console.error('GET', err);
                reject(err);
            });
        });
    }
}

