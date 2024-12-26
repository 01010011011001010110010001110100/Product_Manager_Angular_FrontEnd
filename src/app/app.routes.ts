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
import { EROUTES } from './enums/EROUTES';

export const routes: Routes = [
    // Default route (the main one)
    { path: EROUTES.BASE, component: AboutPageComponent},

    // General routes
    { path: EROUTES.ABOUT_PAGE, component: AboutPageComponent},

    // Product routes
    { path: EROUTES.LIST_PRODUCTS, component: ListProductsComponent },
    // { path: EROUTES.DETAIL_PRODUCT, component: DetailProductComponent },
    { path: EROUTES.CREATE_PRODUCT, component: CreateProductComponent},
    { path: EROUTES.EDIT_PRODUCT, component: EditProductComponent},
    { path: EROUTES.DELETE_PRODUCT, component: DeleteProductComponent },

    // Client routes
    { path: EROUTES.LIST_CLIENTS, component: ListClientsComponent },
    // { path: EROUTES.DETAIL_CLIENT, component: DetailClientComponent },
    { path: EROUTES.CREATE_CLIENT, component: CreateClientComponent },
    { path: EROUTES.EDIT_CLIENT, component: EditClientComponent },
    { path: EROUTES.DELETE_CLIENT, component: DeleteClientComponent }
];
