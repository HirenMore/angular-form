import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpApiService {
  constructor(
    // Angular Modules
    private http: HttpClient
  ) {}
  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }
  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, options);
  }
  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }
  public patch(url: string, options?: any) {
    return this.http.patch(url, options);
  }
  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }
}
