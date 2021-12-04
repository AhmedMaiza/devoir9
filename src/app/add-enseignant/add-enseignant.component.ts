import { Component, OnInit } from '@angular/core';
import { EnseignantComponent } from '../enseignant/enseignant.component';
import { Enseignant } from '../model/enseignant.model';
import { EnseignantService } from '../services/enseignant.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {
  newEnseignant= new Enseignant();
  message:string;
  constructor(private enseignantService: EnseignantService,
    private router :Router ) {

   }

  ngOnInit(): void {
  }
  addEnseingnant(){ 
     this.enseignantService.ajouterEnseingnant(this.newEnseignant);
     this.message="Enseignant "+this.newEnseignant.nomEnseignant+" ajouter avec succes ";
     this.router.navigate(["enseignant"]);
  }

}
