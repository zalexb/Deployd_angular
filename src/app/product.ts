export class Product {
	public id: string;
	public title: string;
	public price: string;

	constructor (id, title, price) {
		this.id = id;
		this.title = title;
		this.price = price;
	}
}