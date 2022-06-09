import { Component, OnInit } from '@angular/core';
import { SocketWebService } from 'src/app/services/socket-web.service';
import { GradeInterface } from '../../interfaces/Interfaces';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css']
})
export class CalificarComponent implements OnInit {

  grade!: GradeInterface;

  constructor(
    private socketWebService: SocketWebService,
  ) { }

  ngOnInit(): void {
  }


  calificarServicio(){

    this.grade= {

   //   from: localStorage.getItem("IdAdmin") || '',
    //  to: UserSite_selected,
      dificulty: 5,
      quality: 5
    };

    console.log(this.grade);
    this.socketWebService.calificarServicio(this.grade, "623e5a9d5516abd648a35230");


 }

}
