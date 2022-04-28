import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})


export class PaginadorComponent implements OnInit {

  @Input() totalResults: number =1;
  @Input() limitProducts: number=1;
  currentPage: number=1;
  currentRole: string= ''
  totalPages: number=1;
  lastPage: number=1;
  pages: [] = [];


  constructor( private activatedRoute: ActivatedRoute,
                private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams
      .subscribe( ({page,role})  => {
        if (!page) {
          page = 1
        }
        if (!role) {
          role = 'user_role'
        }
        this.totalPages = Math.trunc( this.totalResults / this.limitProducts ) + 1
        this.lastPage = this.totalPages
        this.currentRole= role;
        console.log(role);

        this.currentPage = Number( page )
      })

      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i as never)

      }


  }


  changePage( page: number ){

    this.currentPage = page
    this.currentRole
    const url = this.router.url.split('?')[0]
    console.log(url)
    this.router.navigateByUrl(`${ url }?page=${ page }&role=${ this.currentRole }`)

  }



}
