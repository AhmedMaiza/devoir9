import { Injectable } from '@angular/core';
import { EnseignantComponent } from '../enseignant/enseignant.component';
import { Enseignant } from '../model/enseignant.model';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  enseignants : Enseignant[];
  enseignant : Enseignant;
  constructor() { 
    this.enseignants = [
      {idEnseignant : 1, nomEnseignant : " Mr Walid ben jannet", salaireEnseignant : 3000.600, dateEmbauche : new Date("01/14/2011")},
      {idEnseignant : 2, nomEnseignant : "Mdm Mahassen khmiri", salaireEnseignant : 2000.100, dateEmbauche : new Date("12/17/2010")},
      {idEnseignant : 3, nomEnseignant :"Mdm Sonia gerbouj", salaireEnseignant : 2000.123, dateEmbauche : new Date("02/20/2020")}
      ];
  }
  listeEnseignant():Enseignant[]{
    return this.enseignants;
  }

  ajouterEnseingnant(enseignant:Enseignant){
        this.enseignants.push(enseignant);
  }

  supprimerEnseignant(ensi : Enseignant){
    //supprimer le enseingant ensi du tableau enseignants
const index = this.enseignants.indexOf(ensi, 0);
if (index > -1) {
this.enseignants.splice(index, 1);
}
//ou Bien
/* this.enseignants.forEach((cur, index) => {
if(ensi.idEnseignant === cur.idEnseignant) {
this.enseignants.splice(index, 1);
}
}); */

  }
  consulterEnseignant(id:number): Enseignant{
    this.enseignant = this.enseignants.find(p => p.idEnseignant == id);
    return this.enseignant;
    }

    updateEnseignant(p:Enseignant)
{
// console.log(p);
this.supprimerEnseignant(p);
this.ajouterEnseingnant(p);
this.trierEnseignat();
}

trierEnseignat(){
  this.enseignants= this.enseignants.sort((n1,n2) => {
  if (n1.idEnseignant > n2.idEnseignant) {
  return 1;
  }
  if (n1.idEnseignant < n2.idEnseignant) {
  return -1;
  }
  return 0;
  });
  }
}
