import { NewAppService } from './../services.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit,OnInit {
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  public sources:any = [];
  public articles:any = [];
  public selectedNewsChannel:string = "Top Trending News!"


  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef, private service: NewAppService) { }

  ngOnInit(): void {
    this.initArticles();
    this.initSources();
  }

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['max-width:787px']).subscribe((response) => {
      if (response?.matches) {
        this.sideNav.mode = "over";
        this.sideNav.close();
      } else {
        this.sideNav.mode = "over";
        this.sideNav.open();
      }
    });
    this.cdr.detectChanges();
  }

  initSources(){
    this.service.initSources().subscribe((response:any) =>{
      console.log(response);
      this.sources = response.sources;
    });
  }

  initArticles(){
    this.service.initSources().subscribe((response:any) =>{
      console.log(response);
      this.articles = response.articles;
    });
  }

  searchSource(source:any){
    this.service.getArticlesByID(source.id).subscribe((response:any) =>{
      this.articles = response.articles;
      this.selectedNewsChannel = source.name;
    })
  }
}
