import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetsService {

  constructor(private http: Http) { }

  getTweets(keyword: string) {
    const url = `https://twitter-api-justin-munn.herokuapp.com/tweets?keyword=${keyword}`;
    return this.http.get(url)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getHashtagTweets(hashtag: string) {
    const url = `http://twitter-api-justin-munn.herokuapp.com/tweets?hashtag=${hashtag}`;
    return this.http.get(url)
    .map(this.extractData)
    .catch(this.handleError);
  }

  extractData(res: Response) {
    return res.json();
  }

  handleError(error: Response | any) {
    console.log(error);
    return Observable.throw(error);
  }

}
