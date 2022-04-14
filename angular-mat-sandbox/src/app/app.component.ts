import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {DialogExampleComponent} from "./dialog-example/dialog-example.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
  }
  title = 'angular-mat-sandbox';
  notifications = 2;
  showSpinner = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => this.showSpinner = false, 5000)
  }

  opened = false;

  log(state: any) {
    console.log(state);
  }

  logChange(index: any) {
    console.log(index)
  }

  selectedValue: string = '';

  options: string[] = ['Angular', 'React', 'Vue']
  objectOptions = [
    {name: 'Angular'},
    {name: 'Angular Mat'},
    {name: 'React'},
    {name: 'Vue'}
  ];

  displayFn(subject: object) {
    // @ts-ignore
    return subject ? subject.name : undefined;
  }

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue))
  }

  minDate = new Date();
  maxDate = new Date(2022, 5, 10);

  // @ts-ignore
  dateFilter = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  openSnackbar(message:any, action:any){
    let snackbarRef = this.snackBar.open(message, action, {duration:2000});
    snackbarRef.afterDismissed().subscribe(()=>{
      console.log('Snackbar dismissed');
    });
    snackbarRef.onAction().subscribe(()=>{
      console.log('triggered')
    });
  }

  openCustomSnackbar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration:2000})
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name:'LUL'}});
    dialogRef.afterClosed().subscribe(result=> {
      console.log(`Dialog res: ${result}`)
    })
  }
}

@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'>Custom snackbar</span>`
})
export class CustomSnackBarComponent {

}
