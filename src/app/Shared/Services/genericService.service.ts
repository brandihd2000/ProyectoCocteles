import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import BaseEntity from "../Models/Base/base.model";

@Injectable({
    providedIn: 'root'
})


export class GenericService<T extends BaseEntity> {
    public apiUrl: string;

    constructor(public http: HttpClient, @Inject(String) public controllName: string) {
        this.apiUrl = environment.apiUrl;
    }


    public getAll(): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}${this.controllName}`);
    }
}