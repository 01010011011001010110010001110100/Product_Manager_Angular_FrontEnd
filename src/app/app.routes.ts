import { Routes } from '@angular/router';
import { ListProductsComponent } from './routes/list-products/list-products.component';
import { SaveProductComponent } from './routes/save-product/save-product.component';
import { AboutPageComponent } from './routes/about-page/about-page.component';
import { DeleteProductComponent } from './routes/delete-product/delete-product.component';

export const routes: Routes = [
    { path: '', component: AboutPageComponent},
    { path: 'about-page', component: AboutPageComponent},
    { path: 'list-products', component: ListProductsComponent},
    { path: 'save-product', component: SaveProductComponent},
    { path: 'delete-product', component: DeleteProductComponent }
];
