import { Component, NgModule, OnInit, VERSION, ViewChild } from "@angular/core";
import { ElementRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TableModule, Table } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';

@Component({
  selector: "my-table",
  templateUrl: `./my-table.component.html`,
  styleUrls: ['./app.component.css']
})
export class MyTableComponent implements OnInit {
  name: string;
  private selectedValues: string[] = [];
  private selectedRoles: string[] = [];
  private rowIndex = 0;
  private allRoles: Array<string> = [];
  private acctRoles: Array<any> = [];
  columnDefs: Array<any> = [];
  rowData: Array<any> = [];
  selectedRows: Array<any> = [];

  @ViewChild("tableContainer") tableContainer: ElementRef;
  @ViewChild("table") table: Table;
  @ViewChild("roleSelect") roleSelect: MultiSelect;

  constructor() {}

  ngOnInit(): void {
    this.columnDefs = this.generateColumns();
    this.buildRolesList();
    this.rowData = this.generateData();
  }
  generateColumns(): Array<any> {
    this.allRoles = this.populateRoles();
    const columns = [
      {
        header: "Username",
        field: "username",
        editable: false,
        width: 160
      },
      {
        header: "Role(s)",
        field: "roles",
        editable: true,
        width: 160
      },
      {
        header: "First",
        field: "firstName",
        editable: true,
        width: 160
      },
      {
        header: "Last",
        field: "lastName",
        editable: true,
        width: 160
      }
    ];

    return columns;
  }

  generateData(): Array<any> {
    const results = [
      {
        id: "user1",
        username: "user1",
        roles: ["Tailor"],
        firstName: "User",
        lastName: "One"
      },
      {
        id: "user2",
        username: "user2",
        roles: ["Soldier", "Tinker"],
        firstName: "Yser",
        lastName: "Two"
      },
      {
        id: "user3",
        username: "user3",
        roles: [],
        firstName: "Ewser",
        lastName: "Three"
      }
    ];
    return results;
  }

  populateRoles() {
    const allRoles = new Array();
    allRoles.push('');
    allRoles.push('Tinker');
    allRoles.push('Tailor');
    allRoles.push('Soldier');
    allRoles.push('Sailor');
    return allRoles;
  }
  buildRolesList(): void {
    this.allRoles.forEach(item => {
      if (item !== "") {
        this.acctRoles.push({ label: item, value: item });
      }
    });
  }
  onChange(data): void {
    if (data) {
      console.log('Updated user ${data.username}.');
    }

  }

  /*
   * adding space to the roles string for
   * text to wrap in the cell
   */
  formating(content) {
    let formatted = content;
    if (Array.isArray(content)) {
      formatted = content.toString().replace(/,/g, ', ');
    }
    return formatted;
  }

}
