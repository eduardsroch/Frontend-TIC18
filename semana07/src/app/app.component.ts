import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'JReader';
  categorias: string[] = [];
  veiculos:any;
  propriedades:any;
  valorPropriedades:any;
  valor:any;
  json: any;
  salvos: string[] = [];
  lerArquivo(fileTobeRead: File, fileReader: FileReader){
    return new Promise((resolve, reject) => {
      fileReader.onerror = () => {
        fileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.readAsText(fileTobeRead);
    });
  };
  async getArquivo(){
    var fileSelected = (<HTMLInputElement>document.getElementById('arqv'));
    var fileTobeRead = fileSelected.files![0];
    var fileReader = new FileReader();
    try {
      const fileContents = await this.lerArquivo(fileTobeRead, fileReader) ;
      this.json = JSON.parse(<string>fileContents);
      this.makeCategorias();
    } catch (e:any) {
      console.warn(e.message);
    }
  }
  makeCategorias(){
    for(const key in this.json){
      this.categorias.push(key);
    }
    this.veiculos = null;
    this.propriedades = null;
    this.valorPropriedades = null;
    this.valor = null;
    (document.getElementById("add") as HTMLButtonElement)!.disabled = true;
  };
  salvarCategoria(categoria:string){
    for(const key in this.json){
      if(key == categoria){
        this.propriedades = null;
        this.valorPropriedades = null;
        this.valor = null;
        this.veiculos = this.json[key];
        (document.getElementById("add") as HTMLButtonElement)!.disabled = true;
        break;
      }
    }
  }
  salvarVeiculo(veiculo:any){
    for(const key in this.veiculos){
      if(this.veiculos[key]==veiculo){
        this.propriedades = Object.keys(this.veiculos[key]);
        this.valorPropriedades = this.veiculos[key];
        this.valor = null;
        (document.getElementById("add") as HTMLButtonElement)!.disabled = false;
        break;
      }
    }
  }
  salvarPropriedade(propriedade:any){
    for(const key in this.valorPropriedades){
      if(key == propriedade){
        this.valor = this.valorPropriedades[key];
        break;
      }
    }
  }
  salvar(){
    this.salvos.push(this.valorPropriedades);
  }
}

