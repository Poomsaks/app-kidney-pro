import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceProService {
  private databaseName = "DiabetsBandung";
  private url = "http://45.136.238.105"
  constructor(private http: HttpClient) { }

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
    return this.http.post<any>(this.url + "/api/per_kidney", payload);
  }
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
            bpd: applicationData.bpd,
            bps: applicationData.bps,
            fever: applicationData.fever,
            cough: applicationData.cough,
            sore_throat: applicationData.sore_throat,
            phlegm: applicationData.phlegm,
            headache: applicationData.headache,
            covid: applicationData.covid,
            vomit: applicationData.vomit,
            feverish: applicationData.feverish,
            class_per: applicationData.class_per,
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
  //   return this.http.post<any>("/api/insert_data_kidney", payload);
  // }
  get_profile(): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName
      }
    };
    return this.http.post<any>(this.url + "/api/get_kidney_profile", payload);
  }
  get_data_admin(): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName
      }
    };
    return this.http.post<any>(this.url + "/api/get_data_admin_kidney", payload);
  }

}
