import { Component, OnInit } from '@angular/core';
import { EnseignantComponent } from '../enseignant/enseignant.component';
import { Enseignant } from '../model/enseignant.model';
import { EnseignantService } from '../services/enseignant.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {
  
  currentEnseignant = new Enseignant();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private enseignantService: EnseignantService) { }

  ngOnInit(): void {

    this.currentEnseignant = this.enseignantService.consulterEnseignant(this.activatedRoute.snapshot.params.id);
    console.log(this.currentEnseignant);
    

  }
  updateEnseignant(){ 
    this.enseignantService.updateEnseignant(this.currentEnseignant);
    this.router.navigate(["enseignant"]);
  }

}
