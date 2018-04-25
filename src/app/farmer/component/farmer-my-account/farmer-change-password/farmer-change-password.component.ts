import { Component, OnInit } from '@angular/core';
import { FarmerHeaderService } from '../../../services/farmer-header/farmer-header.service';

@Component({
  selector: 'app-farmer-change-password',
  templateUrl: './farmer-change-password.component.html',
  styleUrls: ['./farmer-change-password.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
