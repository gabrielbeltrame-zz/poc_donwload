import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DownloadService {
  private rota =
    "http://10.101.215.216:8745/CobrancaPos/Processamento/DownloadArquivosCobranca?RegistroProcessoAutoId=234264";

  private httpOptions = {
    responseType: "blob",
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      CnServer: "tcp:10.144.27.135\\sql2016ubteste,1433",
      CnUserId: "ubcardio",
      CnUserPassword: "unimed",
      CnCatalog: "AUTO_CobrancaPos",
      AppUsuario: "sa",
    }),
  };

  constructor(private http: HttpClient) {}

  // async downlaod(): Promise<any> {
  //   return this.http.get(this.rota, this.httpOptions).toPromise();
  // }

  download(): Observable<Blob> {
    return this.http.get(this.rota, {
      responseType: "blob",
      headers: {
        CnServer: "tcp:10.144.27.135\\sql2016ubteste,1433",
        CnUserId: "ubcardio",
        CnUserPassword: "unimed",
        CnCatalog: "AUTO_CobrancaPos",
        AppUsuario: "sa",
      },
    });
  }
}
