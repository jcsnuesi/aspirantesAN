import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { global } from "./global";
import { CookieService } from "ngx-cookie-service";


@Injectable()
export class UserService{

    public url:string;
    public identity:any;
    public token: any;

    constructor(private _http:HttpClient,
        private _cookies:CookieService){
        this.url = global.url;
    }

    registrarUsuario(user:any):Observable<any>{
     
        
        var params = JSON.stringify(user)
        var header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'create-user', params, {headers:header})

    }

    login(user:any, gettoken=false):Observable<any>{

        if (gettoken != false) {

            user.token = gettoken
            
        }
        var params = JSON.stringify(user)
        var header = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'login', params,{headers:header})

    }
    getIdentidad(){
       
        return JSON.parse(this._cookies.get('identity') || "false")
    }
    getToken(){

        return this._cookies.get('token') || "false"
    }

    getAvatar(filename:string):Observable<Object>{

        return this._http.get(this.url + 'avatar/' + filename)
    }
    cookiesDestroy(){

        this._cookies.delete('identity')
        this._cookies.delete('token')
    }
}
