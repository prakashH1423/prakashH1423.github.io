import { Component } from '@angular/core';
import { UniversityService } from './university.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ventriks-fe';
  indianUniversities: any[] | undefined;
  universitiesTotal: any;
  chineseUniversities: any;
  frenchUniversities: any;
  canadianUniversities: any;
  indianUniversitiesSliced: any[] | undefined;
  pageCounter = 1;
  countries = ["India", "China", "France", "Canada"];
  filteredUniversities: any;
  selectedCountry: any;
  constructor( private universityService: UniversityService){
  }

  ngOnInit(){
    this.universityService.getUniversities().subscribe((response)=>{
      this.universitiesTotal = response;
      this.countrySelect("India");
    });
  }

  countrySelect(country: any){
    this.selectedCountry = country;
    this.filteredUniversities =  this.universitiesTotal.filter((item:any)=>{
      if(item.country === country){
        return item;
      }
    }).slice(0,10);
  }

  filterUniversities(text:any){
    let inpuText = text.target.value;
    this.filteredUniversities = this.universitiesTotal.filter((item:any)=>{
      if(item.country === this.selectedCountry){
        if(item.name.toLowerCase().indexOf(inpuText.toLowerCase()) !== -1){
          return item;
        }
      }
    }).slice(0,10);

  }

}
