import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http"
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public rowData: any;
  constructor(
    private appService: AppService) { }

  ngOnInit() {
    this.appService.getDataSource().subscribe((res: Response) => {
      this.rowData = res;
    });

  }

  title = 'Welcome to Accion Lab';
  columnDefs = [
    { headerName: 'User ID', field: 'userId', width: 100 },
    { headerName: 'ID', field: 'id' , width: 100},
    { headerName: 'Title', field: 'title', width: 700 }
  ];

}
