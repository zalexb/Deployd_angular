import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Product } from './product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

	private url = "http://localhost:2403/product";

  constructor(private http: Http) { }

  public getCatalog(): Observable<Product[]> {
  	let catalog = this.http.get(this.url)
  		.map(this.extractCatalog)
  		.catch(this.handleError);
  	return catalog;
  }

  private extractCatalog(response: Response) {
  	let res = response.json();
  	let catalog: Product[] = [];
  	for (let i = 0; i < res.length; i++) {
  		catalog.push(new Product(res[i].id, res[i].title, res[i].price));
  	}
  	return catalog;


  }
  private handleError(error: any, cought: Observable<any>): any {
  	let message = "";
  	if(error instanceof Response) {
  		let errorData = error.json().error || JSON.stringify(error.json());
  		message = `${error.status} - ${error.statusText || ''} ${errorData}`
  	} else {
  		message = error.message ? error.message : error.toString();
  	}
  	return Observable.throw(message);
  }

}
