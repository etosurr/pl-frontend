import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesystemService {
  private readonly apiPrefix = '/api';

  constructor(private httpClient: HttpClient) { }

  public getPathContent(path: string): Observable<PathContentResponse[]> {
    const queryParams = {
      directory: path,
    };

    return this.httpClient.get<PathContentResponse[]>(this.apiPrefix + '/list', { params: queryParams });
  }
}

export class PathContentResponse {
  public name: string;
  public directory: boolean;
}
