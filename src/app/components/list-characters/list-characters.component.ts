import { Component, OnInit } from '@angular/core';
import { PropertyApiService } from 'src/app/services/property-api.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  constructor( 
    private propertyApiService: PropertyApiService
  ){}

  public characters: any;
  public count: number = 0;
  public previousPage: string = '';
  public nextPage: string = '';

  public planets: string[] = [];

  ngOnInit(): void {
    this.propertyApiService.getAllCharacters().subscribe(
      response => {
        this.characters = response.results;
        this.count = response.count;
        this.nextPage = response.next;
        this.previousPage = response.previous;
      },
      error => {
        console.log(error);
      }         
    );
  }
  public getObjectProperties(obj: any) {
    return Object.keys(obj).map(key => obj[key]);
  }

  viewPlanet(linkPlanet: string) {
    this.propertyApiService.getPlanet(linkPlanet).subscribe(
      response => {
        //esvaziando array
        this.planets = [];
        
        //inserindo novos valores no array
        this.planets.push(response);
        
        // Renomeando o título da div
        const modalTitle = document.getElementsByClassName('modal-title');
        
        if (modalTitle.length > 0) {
          const firstElement = modalTitle[0];
          firstElement.innerHTML = response.name;
        }        
      },
      error => {
        console.log(error);
      }
    );

    const modelDiv = document.getElementById('listPlanet');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }    
  }

  getCharactersNewPage(url: string) {
    this.propertyApiService.getCharactersNewPage(url).subscribe(
      response => {
        this.characters = response.results;
        this.count = response.count;
        this.nextPage = response.next;
        this.previousPage = response.previous;
      },
      error => {
        console.log(error);
      }         
    );
  }
}
