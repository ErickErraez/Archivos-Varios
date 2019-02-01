import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/CRUD/product.service';
import { Product } from 'src/app/models/Product';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    jua: any;
    producto: Product;
    variable: any;
    constructor(private productService: ProductService) { }

    ngOnInit() {

        this.producto.name = this.jua;
        this.productService.post(this.producto).then(r => {
            this.variable = r;
        }).catch(e => {

        });
    }

}
