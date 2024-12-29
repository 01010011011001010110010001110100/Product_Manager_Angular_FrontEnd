import { Routes } from '@angular/router';
import { ListProductsComponent } from './Presentation/routes/product/list-products/list-products.component';
import { AboutPageComponent } from './Presentation/routes/about-page/about-page.component';
import { ListClientsComponent } from './Presentation/routes/client/list-clients/list-clients.component';
import { CreateProductComponent } from './Presentation/routes/product/create-product/create-product.component';
import { EditProductComponent } from './Presentation/routes/product/edit-product/edit-product.component';
import { CreateClientComponent } from './Presentation/routes/client/create-client/create-client.component';
import { EditClientComponent } from './Presentation/routes/client/edit-client/edit-client.component';
import { ERoutes } from './Core/enums/ERoutes';

export const routes: Routes = [
    // Default route (the main one)
    { path: ERoutes.BASE, component: AboutPageComponent},

    // General routes
    { path: ERoutes.ABOUT_PAGE, component: AboutPageComponent},

    // Product routes
    { path: ERoutes.LIST_PRODUCTS, component: ListProductsComponent },
    // { path: EROUTES.DETAIL_PRODUCT, component: DetailProductComponent },
    { path: ERoutes.CREATE_PRODUCT, component: CreateProductComponent},
    { path: ERoutes.EDIT_PRODUCT, component: EditProductComponent},

    // Client routes
    { path: ERoutes.LIST_CLIENTS, component: ListClientsComponent },
    // { path: EROUTES.DETAIL_CLIENT, component: DetailClientComponent },
    { path: ERoutes.CREATE_CLIENT, component: CreateClientComponent },
    { path: ERoutes.EDIT_CLIENT, component: EditClientComponent }
];
