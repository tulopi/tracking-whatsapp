import { Routes } from '@angular/router';
import { CampaignComponent } from './pages/campaign/campaign.component';
import { TokenComponent } from './pages/token-config/token-config.component';

export const routes: Routes = [
  { path: "campaign", component: CampaignComponent},
  { path: "token-config", component: TokenComponent}
];
