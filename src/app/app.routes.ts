import { Routes } from '@angular/router';
import { ListProductsComponent } from './routes/product/list-products/list-products.component';
import { SaveProductComponent } from './routes/product/save-product/save-product.component';
import { AboutPageComponent } from './routes/about-page/about-page.component';
import { DeleteProductComponent } from './routes/product/delete-product/delete-product.component';
import { ListClientsComponent } from './routes/client/list-clients/list-clients.component';
import { SaveClientComponent } from './routes/client/save-client/save-client.component';
import { DeleteClientComponent } from './routes/client/delete-client/delete-client.component';

export const routes: Routes = [
    { path: '', component: AboutPageComponent},
    { path: 'about-page', component: AboutPageComponent},
    { path: 'list-products', component: ListProductsComponent},
    { path: 'save-product', component: SaveProductComponent},
    { path: 'delete-product', component: DeleteProductComponent },
    { path: 'list-clients', component: ListClientsComponent },
    { path: 'save-client', component: SaveClientComponent },
    { path: 'delete-client', component: DeleteClientComponent }
];
