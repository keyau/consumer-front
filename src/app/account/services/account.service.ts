import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Account } from '../models/account';
import { Selection } from '../models/selection';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private accountsUrl = 'http://10.100.144.168:3000/api/accounts'; // URL to web api
  private selectionsUrl = 'http://10.100.144.168:3000/api/selections'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET accounts from the server */
  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl).pipe(
      tap((_) => this.log('fetched accounts')),
      catchError(this.handleError<Account[]>('getAccounts', []))
    );
  }

  /** GET account by id from the server */
  getAccount(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.accountsUrl}/${id}`).pipe(
      tap((_) => this.log('fetched account by id')),
      catchError(this.handleError<Account>('getAccount'))
    );
  }

  /** POST: add a new account to the server */
  addAccount(account: Account): Observable<Account> {
    return this.http
      .post<Account>(this.accountsUrl, account, this.httpOptions)
      .pipe(
        tap((newAccount: Account) =>
          this.log(`added account w/ id=${newAccount._id}`)
        ),
        catchError(this.handleError<Account>('addAccount'))
      );
  }

  /** POST: add a new selection to the server */
  addSelection(id: string): Observable<Selection> {
    const body = { accountId: id };
    return this.http
      .post<Selection>(this.selectionsUrl, body, this.httpOptions)
      .pipe(
        tap((newSelection: Selection) =>
          this.log(`added selection w/ id=${newSelection._id}`)
        ),
        catchError(this.handleError<Selection>('addSelection'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    //this.messageService.add(`AccountService: ${message}`);
  }
}
