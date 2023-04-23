import { TestBed } from '@angular/core/testing';

import { CompanyDataService } from './company-data.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Company } from './company.model';

describe('CompanyDataService', () => {
  let service: CompanyDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CompanyDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get company data from API', function () {
    const companyData = {
      name: 'Test',
      address: 'Test',
      phones: ['111-111-111', '222-222-222'],
    };

    service.getCompanyData().subscribe((company: Company) => {
      expect(company).toEqual(companyData);
    });

    const req = httpTestingController.expectOne(
      'https://company-data-a5278-default-rtdb.europe-west1.firebasedatabase.app/company.json'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(companyData);
  });
});
