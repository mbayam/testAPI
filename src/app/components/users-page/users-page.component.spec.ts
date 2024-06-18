import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageComponent } from './users-page.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { MatTableModule } from '@angular/material/table';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;
  let service: UsersService;
  let compiled: HTMLElement;
  let loader : HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPageComponent ],
      schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
      providers: [UsersService],
      imports: [HttpClientTestingModule, MatTableModule],
    })
    .compileComponents();

    service = TestBed.get(UsersService);

    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });



  it('should create user page', () => {
    expect(component).toBeTruthy();
  });

  it("should render  a link", () => {
    expect(compiled.querySelector('a')?.tagName).toEqual('A')
    expect(compiled.querySelector('a')?.textContent).toEqual('Return to home page');

  });

  it("should have a table", async() => {
    expect(compiled.querySelector('mat-table')?.tagName).toEqual('MAT-TABLE')
  });

});
