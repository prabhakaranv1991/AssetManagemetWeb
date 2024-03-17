import { Component } from '@angular/core';
import { Asset } from '../model/asset.model';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrl: './asset-list.component.css'
})
export class AssetListComponent {
  assets: Asset[] = [
    new Asset("Lenovo-100","AZ51HL","Test User","Manger","Laptop"),
    new Asset("Lenovo-101","ML51HL","Test User","Manger","Laptop")
  ];

  constructor()
  {

  }

}
