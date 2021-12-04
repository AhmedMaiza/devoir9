import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';//1
import { AuthService } from '../services/auth.service';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
 
  enseignants : Enseignant[];
  constructor(private enseignantService: EnseignantService, public authService: AuthService) { 
   this.enseignants=enseignantService.listeEnseignant();
  }

  ngOnInit(): void {
  }
  
  
  supprimerEnseignant(ensi : Enseignant){
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
    this.enseignantService.supprimerEnseignant(ensi);
  }

}
