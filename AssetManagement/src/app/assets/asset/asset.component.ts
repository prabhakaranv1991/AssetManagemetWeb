import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrl: './asset.component.css'
})
export class AssetComponent {

  datas:any = [];

  constructor(private http:HttpClient)
  {
  }

  Save()
  {

    let x = this.http.get('https://localhost:44336/api/Users').pipe(
      finalize(() => {
        callA();
      })
    ).subscribe((data) => {
      console.log(data);
      this.datas = data;
    });

    


  }

}
function callA() {
  console.log(this.datas);
    for(let d of this.datas){
      console.log(d.Id);
    }
}

