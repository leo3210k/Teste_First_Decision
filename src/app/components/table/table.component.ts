import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface UserData {
  name: string;
  status: string;
  creation_date: Date;
  last_acess: Date;
  surname: string;
  phone: string;
  email: string;
  profile: string[];
  language: string;
  fav_contact: string;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['user', 'status', 'creation_date', 'last_acess', 'action'];
  dataSource: MatTableDataSource<UserData>;
  users: UserData[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedFilter: string = '';

  constructor() {
    this.dataSource = new MatTableDataSource(this.users);
  }

  addData(data: any) {
    this.users.push({
      name: data.name,
      status: `${'Ativo'}`,
      creation_date: new Date(),
      last_acess: new Date(),
      surname: data.surname,
      phone: data.phone,
      email: data.email,
      profile: data.profile,
      language: data.language,
      fav_contact: data.fav_contact
    });
    this.dataSource.data = this.users;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyInputFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applySelectFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectChange(event: any): void {
    this.applySelectFilter(event.value);
  }
}
