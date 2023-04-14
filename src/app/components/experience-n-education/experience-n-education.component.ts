import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience-n-education',
  templateUrl: './experience-n-education.component.html',
  styleUrls: ['./experience-n-education.component.css']
})
export class ExperienceNEducationComponent implements OnInit {
  educationList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
        this.educationList=data.education;
    });
  }

}
