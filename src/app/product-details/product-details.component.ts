import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})



export class ProductDetailsComponent implements OnInit {

  @Input()item: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    // this.selectItem();
  }

 /*  selectItem() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.selectItem(id)
      .subscribe(data => this.item = data);
  } */

}
