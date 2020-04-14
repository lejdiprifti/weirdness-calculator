import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, API_KEY } from './constant';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  
constructor(private httpClient: HttpClient) {}

  public getByPhrase(phrase: string): Observable<any>{
    let params = new HttpParams().append('api_key', API_KEY).append('limit', '1')
    params = params.append('q', phrase)
    
    return this.httpClient.get(BASE_URL + 'search',  { params: params })
  }

  public getByPhraseAndWeirdness(phrase: string, weirdness: number): Observable<any>{
    let params = new HttpParams().append('api_key', API_KEY).append('limit', '1')
    params = params.append('s', phrase).append('weirdness', weirdness.toString())
    
    return this.httpClient.get(BASE_URL + 'translate', { params: params })
  }
}
