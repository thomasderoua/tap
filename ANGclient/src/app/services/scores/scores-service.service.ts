/* 
Imports 
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
//

/* 
Definition 
*/
@Injectable()
export class ScoresService {

  // Inject module(s) in the service
  constructor( private HttpClient: HttpClient ){};

  // Function to set a new score
  public setScore(score): Promise<any>{
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // POST '/scores'
    return this.HttpClient.post(`${environment.apiUrl}/scores`, {score: score}, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError);
  };

  // Function to get all scores
  public getScores(): Promise<any>{
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // GET '/scores'
    return this.HttpClient.get(`${environment.apiUrl}/scores`, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError);
  };

  // Get the API response
  private getData(res: any){
    return res || {};
  };

  // Get the API error
  private handleError(err: any){
    return Promise.reject(err.error);
  };
};
//