import { Injectable } from '@angular/core';
import { Suinos } from './suino.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  loadedSuino: Suinos[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }
  
  addCadastroSuinos(cadastroData: { brincoAnimal: string, 
                                    brincoPai: string, 
                                    brincoMae: string, 
                                    dataNascimento: string, 
                                    dataSaida: string,
                                    status: string, 
                                    sexo: string })
    {
    this.http.post('https://suino-9136e-default-rtdb.firebaseio.com/suinos.json', cadastroData)
    .subscribe((responseData) => { console.log(responseData); });
  }
  
  getSuinos() {
    return this.http.get< {[key:string]: Suinos}>('https://suino-9136e-default-rtdb.firebaseio.com/suinos.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    )
    .pipe(
      map( (responseData) => {
        const postArray:Suinos[] = [];
        for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)){
              postArray.push({...(responseData as any)[key], id: key});
            }
        }
        return postArray;
      }
      )
    );
  }

  getSuino(id:string) {
    return this.http.get<Suinos>(`https://suino-9136e-default-rtdb.firebaseio.com/suinos/${id}.json`);
  }

  editarCadastro(id:string, suinoData: { brincoAnimal: string, 
                                          brincoPai: string, 
                                          brincoMae: string, 
                                          dataNascimento: string, 
                                          dataSaida: string,
                                          status: string, 
                                          sexo: string
                                      })
  {
    return this.http.put(`https://suino-9136e-default-rtdb.firebaseio.com/suinos/${id}.json`, suinoData, {observe: 'response'});
  }

  apagarTodosCadastros() {
    return this.http.delete('https://suino-9136e-default-rtdb.firebaseio.com/suinos.json');
  }

  deletarSuino(id: string): Observable<void> {
    return this.http.delete<void>('https://suino-9136e-default-rtdb.firebaseio.com/suinos/' + id + '.json');
  }

}
