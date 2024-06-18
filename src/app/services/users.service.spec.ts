import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { env } from '../environments/env';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    service = TestBed.get(UsersService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should retieve users from the API via GET', () => {
    const TEST_DATA = [
      {
        "id": 6964135,
        "name": "Chitramala Kakkar",
        "email": "chitramala_kakkar@swaniawski.test",
        "gender": "female",
        "status": "active"
      },
      {
        "id": 6964123,
        "name": "Aagneya Chopra",
        "email": "aagneya_chopra@crist.example",
        "gender": "female",
        "status": "inactive"
      }
    ];
    service.getUsers().subscribe(users =>{
       expect(users.length).toBe(2);
       expect(users).toEqual(TEST_DATA);
    });
    const request = httpMock.expectOne(env.API_URL);
    expect(request.request.method).toBe('GET');
    request.flush(TEST_DATA);

  });
});
