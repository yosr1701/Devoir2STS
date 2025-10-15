import { Component, OnInit } from '@angular/core';
import { vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class VetementComponent implements OnInit {

     vetements! : vetement[]; //un tableau de Produit
     
     constructor(private vetementService: VetementService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerVetements();
      }
    
      chargerVetements(){
        this.vetementService.listeVetement().subscribe(vets => {
          console.log(vets);
          this.vetements = vets;
          });
      }
   

 
  

}
