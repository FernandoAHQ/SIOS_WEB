import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface PersonasRanking{
    pos:  string,
    name: string,
    pts:  number,
    img: string
}




@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})



export class RankingComponent implements OnInit {

  Personas: PersonasRanking[]=[
    {pos:"1º",  name:"ING.Octavio",  pts:1100,    img:"" },
    {pos:"2º",  name:"Marianita",    pts:1000,    img:"" },
    {pos:"3º",  name:"Carlitos",     pts:900,     img:"" },
    {pos:"4º",  name:"Fernando",     pts:800,     img:"" },
    {pos:"5º",  name:"Aaron",        pts:700,     img:"https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/269290456_2166498203502433_490153006077883188_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFL2zDMTNyqPSZnqdARrNNAX9v7SmlzgK1f2_tKaXOArSU3saxJgjXHlSBAQ2W3K3iDBQGLA1YRqcNmjg4YEh-1&_nc_ohc=-NioWEUzFekAX8zjDf4&_nc_ht=scontent.fcjs3-1.fna&oh=00_AT947kkDYhDM4d00n1csWHZWKOf8hBc9K6ieF1qCvCdmsg&oe=629A2A6D" },
    
  ]
  
  get _Users(){  
    
    return this.Personas
  
    }
  


  constructor() { }

  ELEMENT_DATA_TABLE: PersonasRanking[] = this._Users;
  displayedColumns: string[] = ['foto', 'pos', 'name', 'puntos'];
  dataSource = new  MatTableDataSource <PersonasRanking>(this.ELEMENT_DATA_TABLE);
  

  ngOnInit(): void {
  }

}
