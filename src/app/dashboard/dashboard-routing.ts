import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductUploadComponent } from './component/product-upload/product-upload.component';
import { ProfileContainerComponent } from './component/profile-container/profile-container.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'upload-product',
        component: ProductUploadComponent
      },
      {
        path: 'profile',
        component: ProfileContainerComponent
      }
    ]
  }
];
