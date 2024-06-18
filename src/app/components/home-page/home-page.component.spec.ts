import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create home page', () => {
    expect(component).toBeTruthy();
  });

  it("should render  applicant's name", () => {
    expect(compiled.querySelector('mat-card-title')?.textContent).toEqual('WA Mbaya');
  });

  it("should render  a link", () => {
    expect(compiled.querySelector('a')?.tagName).toEqual('A')
    expect(compiled.querySelector('a')?.textContent).toEqual('Get users')
  });

});
