import { Component, OnInit} from '@angular/core';
import { OnChanges } from '@angular/core';
import { DoCheck } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <app-clases></app-clases>

    <p [appResaltado]="">Hola Mundo</p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges,
                                      DoCheck, AfterContentInit, AfterContentChecked,
                                      AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
