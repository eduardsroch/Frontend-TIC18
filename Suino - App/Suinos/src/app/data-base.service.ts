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
    sexo: string,
    pesos?: { dataDaPesagem: string, peso: number }[]}
    )
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

editarCadastro(id: string, suinoData: { brincoAnimal: string, 
                                        brincoPai: string, 
                                        brincoMae: string, 
                                        dataNascimento: string, 
                                        dataSaida: string,
                                        status: string, 
                                        sexo: string,
                                        pesos?: { dataDaPesagem: string, peso: number }[]
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
  
  addCadastroPesos(data:{suinoId: string, pesos: { dataDaPesagem: string, peso: number }[]}) {
    
    this.http.post(`https://suino-9136e-default-rtdb.firebaseio.com/suinos/${data.suinoId}/pesos.json`, data.pesos)
      .subscribe((responseData) => { console.log(responseData); });
  }

  adicionarPesos(id: string, novosPesos: { dataDaPesagem: string, peso: number }[]) {
    console.log(novosPesos)
    console.log(id)
    return this.http.put(`https://suino-9136e-default-rtdb.firebaseio.com/suinos/${id}/pesos.json`, novosPesos, {observe: 'response'});  }
  
  getCadastroPesos(suinoId: string) {
    return this.http.get<{ dataDaPesagem: string, peso: number }[]>(`https://suino-9136e-default-rtdb.firebaseio.com/suinos/${suinoId}/pesos.json`)
      .pipe(
        map(responseData => {
          const pesosArray: { dataDaPesagem: string, peso: number }[] = [];
          console.log(responseData);
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              pesosArray.push({ ...responseData[key] });
            }
          }
          return pesosArray;
        })
    );
  }
}
