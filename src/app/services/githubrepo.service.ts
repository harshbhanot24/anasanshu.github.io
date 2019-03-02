import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubrepoService {

  private url = "https://api.github.com/users/anasanshu/repos";
  constructor(private http: HttpClient) { }

  getRepo(){
  return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: Response){
    if(error instanceof null){
      return throwError("Error");
    }
  }
}
