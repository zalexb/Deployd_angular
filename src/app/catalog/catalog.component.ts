import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

	catalog: Product[] = [];
	errorMessage: string;

  constructor(private service: CatalogService) { }

  ngOnInit() {
  	this.getCatalog();
  }


  private getCatalog() {
  	this.service.getCatalog().subscribe(
  		catalog => this.catalog = catalog,
  		error => this.errorMessage = error
  	);
  }

}
