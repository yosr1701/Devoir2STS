import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-vetements',
  standalone: true,                
  imports: [CommonModule],        
  templateUrl: './vetements.component.html',
})
export class VetementsComponent implements OnInit {

  vetements!: vetement[]; 
  constructor(private vetementService: VetementService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(): void {
    this.vetementService.listeVetement().subscribe(vets => {
      console.log(vets);
      this.vetements = vets;
    });
  }
}
