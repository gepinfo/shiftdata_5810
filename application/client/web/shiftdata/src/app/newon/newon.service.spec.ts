import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewonService } from './newon.service';


describe('newonService', () => {
  let service: NewonService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ NewonService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  
  // get all Values
  it('should retrieve all values getallNewon from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
      Nmae: 'Nmae 1',
      EmailId: 'EmailId 1',
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/Newon`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllNewonValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const Newon = { 
      Nmae: 'Nmae 1',
      EmailId: 'EmailId 1',
    };

    
    // Make the API call
    service.PostAllNewonValues(Newon).subscribe(response => {
      expect(response).toEqual(Newon)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/Newon`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(Newon);

    // Flush the mocked response
    req.flush(Newon);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const Newon = { 
      id: '12dsadsa',
      Nmae: 'Nmae 1',
      EmailId: 'EmailId 1',
    };
    
    // Make the API call
    service.UpdateNewon(Newon).subscribe(response => {
      expect(response).toEqual(Newon);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/Newon`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(Newon);

    // Flush the mocked response
    req.flush(Newon);
  });
   
  // delete the Newon 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeleteNewonValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Newon/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified Newon ID', () => {
    const NewonId = 123;
    const mockResponse = { 
      id: NewonId, 
      Nmae: 'Nmae 1',
      EmailId: 'EmailId 1',
    };

    // Make the request
    service.GetEntityById(NewonId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Newonid/`+NewonId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationNewon
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificNewon(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Newon/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificNewonHistory
  it('should send a GET request to the correct URL getSpecificNewonHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificNewonHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Newon/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { Newon: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.SearchNewon(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Newon/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
