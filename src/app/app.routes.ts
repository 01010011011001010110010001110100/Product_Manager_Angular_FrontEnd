import { Routes } from '@angular/router';
import { ListProductsComponent } from './routes/product/list-products/list-products.component';
import { AboutPageComponent } from './routes/about-page/about-page.component';
import { DeleteProductComponent } from './routes/product/delete-product/delete-product.component';
import { ListClientsComponent } from './routes/client/list-clients/list-clients.component';
import { DeleteClientComponent } from './routes/client/delete-client/delete-client.component';
import { CreateProductComponent } from './routes/product/create-product/create-product.component';
import { EditProductComponent } from './routes/product/edit-product/edit-product.component';
import { CreateClientComponent } from './routes/client/create-client/create-client.component';
import { EditClientComponent } from './routes/client/edit-client/edit-client.component';

export const routes: Routes = [
    // Default route (the main one)
    { path: '', component: AboutPageComponent},

    // General routes
    { path: 'about-page', component: AboutPageComponent},

    // Product routes
    { path: 'list-products', component: ListProductsComponent },
    { path: 'create-product', component: CreateProductComponent},
    { path: 'edit-product', component: EditProductComponent},
    { path: 'delete-product', component: DeleteProductComponent },

    // Client routes
    { path: 'list-clients', component: ListClientsComponent },
    { path: 'create-client', component: CreateClientComponent },
    { path: 'edit-client', component: EditClientComponent },
    { path: 'delete-client', component: DeleteClientComponent }
];
