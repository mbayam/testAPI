import { Injectable } from '@angular/core';
import { env } from '../environments/env';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUsers=()=>{
    return this.http.get<User[]>(env.API_URL);
  }


}
