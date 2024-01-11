import { Component, inject, OnInit } from '@angular/core';
import { CampaignService } from './campaign.service';

@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.css'
})
export class CampaignComponent implements OnInit{
  private campaignService = inject(CampaignService);
  data: any[] = [];

  constructor () {};

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.campaignService.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }
};
