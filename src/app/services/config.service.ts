import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { BASE_URL } from "../shared/constants/http.constant";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }
  getConfig() {
    return this.http.get<any>(BASE_URL).pipe(catchError(this.handleError));
  }
}
