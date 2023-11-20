import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceProService {
  private databaseName = "DiabetsBandung";
  private url = "http://45.136.238.105"
  constructor(private http: HttpClient) { }
  // authenticate(): Observable<any> {
  //   return this.http.post<any>(this.url + '/web/session/authenticate', {
  //     login: 'admin',
  //     password: '1234',
  //     db: 'DiabetesBandung' // Corrected the database name (assuming it's 'DiabetesBandung')
  //   }, { withCredentials: true }).pipe(
  //     tap((response) => {
  //       // Assuming 'session_id' is in the response
  //       this.sessionId = response.session_id; // Store the session ID
  //     })
  //   );
  // }
  authenticate(): Observable<any> {
    return this.http.post<any>(this.url + "/web/session/authenticate", {
      params: {
        login: 'admin',
        password: '1234',
        db: 'DiabetsBandung'
      }
    }, { withCredentials: true });
  }

  per_kidney(applicationData: any): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName,
        age: applicationData.age,
        weight: applicationData.weight,
        height: applicationData.height,
        Waist: applicationData.Waist,
        bmi: applicationData.bmi,
        bpd: applicationData.bpd,
        bps: applicationData.bps,
        pulse: applicationData.pulse,
        egfr: applicationData.egfr,
        smoking: applicationData.smoking,
        drinking: applicationData.drinking,
      }
    };
    return this.http.post<any>(this.url + "/api/per_kidney", payload, { withCredentials: true });
  }
  // insert_data(applicationData: any): Observable<any> {
  //   return this.authenticate().pipe(
  //     switchMap(() => {
  //       // หลังจากทำการ authen เสร็จสิ้น ทำการ insert ข้อมูล
  //       const payload = {
  //         params: {
  //           db: this.databaseName,
  //           name: applicationData.name,
  //           phone: applicationData.phone,
  //           email: applicationData.email,
  //           age: applicationData.age,
  //           weight: applicationData.weight,
  //           height: applicationData.height,
  //           Waist: applicationData.Waist,
  //           bmi: applicationData.bmi,
  //           bpd: applicationData.bpd,
  //           bps: applicationData.bps,
  //           pulse: applicationData.pulse,
  //           egfr: applicationData.egfr,
  //           smoking: applicationData.smoking,
  //           drinking: applicationData.drinking,
  //           pdx: applicationData.pdx,
  //         }
  //       };
  //       return this.http.post<any>(this.url + '/api/insert_data_kidney', payload);
  //     })
  //   );
  // }
  insert_data(applicationData: any): Observable<any> {
    return this.authenticate().pipe(
      switchMap(() => {
        const payload = {
          params: {
            db: this.databaseName,
            name: applicationData.name,
            phone: applicationData.phone,
            email: applicationData.email,
            age: applicationData.age,
            weight: applicationData.weight,
            height: applicationData.height,
            Waist: applicationData.Waist,
            bmi: applicationData.bmi,
            bpd: applicationData.bpd,
            bps: applicationData.bps,
            pulse: applicationData.pulse,
            egfr: applicationData.egfr,
            smoking: applicationData.smoking,
            drinking: applicationData.drinking,
            pdx: applicationData.pdx,
          }
        };
        return this.http.post<any>(this.url + '/api/insert_data_kidney', payload, { withCredentials: true });
      })
    );
  }
  // insert_data(applicationData: any): Observable<any> {
  //   const payload = {
  //     params: {
  //       db: this.databaseName,
  //       name: applicationData.name,
  //       phone: applicationData.phone,
  //       email: applicationData.email,
  //       age: applicationData.age,
  //       weight: applicationData.weight,
  //       height: applicationData.height,
  //       Waist: applicationData.Waist,
  //       bmi: applicationData.bmi,
  //       bpd: applicationData.bpd,
  //       bps: applicationData.bps,
  //       pulse: applicationData.pulse,
  //       egfr: applicationData.egfr,
  //       smoking: applicationData.smoking,
  //       drinking: applicationData.drinking,
  //       pdx: applicationData.pdx,
  //     }
  //   };
  //   return this.http.post<any>(this.url + '/api/insert_data_kidney', payload, { withCredentials: true });
  // }

  get_profile(): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName
      }
    };
    return this.http.post<any>(this.url + "/api/get_kidney_profile", payload, { withCredentials: true });
  }
  get_data_admin(): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName
      }
    };
    return this.http.post<any>(this.url + "/api/get_data_admin_kidney", payload, { withCredentials: true });
  }

}
