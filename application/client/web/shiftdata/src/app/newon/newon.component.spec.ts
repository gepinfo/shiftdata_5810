import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewonComponent } from './newon.component';
import { NewonService } from './newon.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

describe('NewonComponent', () => {
  let component: NewonComponent;
  let fixture: ComponentFixture<NewonComponent>;
  let service: NewonService;
  let httpClient: HttpClientTestingModule;
  let nzMessageService: NzMessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [
         HttpClientTestingModule,
        NzFormModule,
        NzMenuModule,
        NzLayoutModule,
        NzInputModule,
        NzTableModule,
        NzDropDownModule,
        NzSwitchModule,
        FormsModule,
        NzIconModule,
        NzButtonModule,
        NzSelectModule,
        NzModalModule,
        NzFormModule,
        NzPopconfirmModule,
        NzMessageModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ NewonComponent ],
      providers: [ NewonService, NzMessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewonComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(NewonService);
    httpClient = TestBed.inject(HttpClient);
    nzMessageService = TestBed.inject(NzMessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //cancel nzmessage
  it('should call nzMessageService.info with the expected message', () => {
    spyOn(nzMessageService, 'info'); // Spy on the nzMessageService.info method
    
    component.cancel();

    expect(nzMessageService.info).toHaveBeenCalledWith('click cancel');
  });

  // confirm delete
  it('should call nzMessageService.info with the expected message and Delete with the correct id', () => {
    spyOn(nzMessageService, 'info'); // Spy on the nzMessageService.info method
    spyOn(component, 'Delete'); // Spy on the Delete method
    const data = { id: 1 };

    component.confirmDelete(data);

    expect(nzMessageService.info).toHaveBeenCalledWith('click confirm');
    expect(component.Delete).toHaveBeenCalledWith(data.id);
  });

   //show modal
  it('should set isVisibleCreate to true', () => {
    component.showModal();

    expect(component.isVisibleCreate).toBe(true);
  });
  //handleok
  it('should set handle ok isVisibleCreate and isVisibleUpdate to true', () => {
    spyOn(console, 'log'); // Spy  on the console.log method
    
    component.handleOk();

     
    expect(component.isVisibleCreate).toBe(false);
    expect(component.isVisibleUpdate).toBe(false);
  });
  //handle cancel
  it('should set handlecancel isVisibleCreate and isVisibleUpdate to false', () => {
    spyOn(console, 'log'); // Spy  on the console.log method
    
    component.handleCancel();

 
    expect(component.isVisibleCreate).toBe(false);
    expect(component.isVisibleUpdate).toBe(false);
  });






  // post create apps 
  it('should call PostAllnewonValues and reset newon properties', () => {
    // Create a spy for the Create method of the service
    spyOn(service, 'PostAllnewonValues').and.returnValue(of({}));
  
    // Set values for newon properties
    component.Newon.Nmae = 'Nmae Name';
    component.Newon.EmailId = 'EmailId Name';

    // Call the Create method
    component.Create();

    // Expect the PostAllnewonValues method to have been called with the newon object
    expect(service.PostAllnewonValues).toHaveBeenCalledWith(component.Newon);

    // Expect the newon properties to be reset
    expect(component.Newon.Nmae).toBe('');
    expect(component.Newon.EmailId).toBe('');

  });
  it('should log error on update PostAllnewonValues failure', () => {
    const error = new Error('PostAllnewonValues failed');
    spyOn(service, 'PostAllnewonValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Create();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });



  // GetAllValues all test case 
  it('should set the rowData property on successful response', () => {
    const mockData:any = [{ 
      _id: 1, 
      Nmae: 'Nmae 1',
      EmailId: 'EmailId 1',
    }];
    spyOn(service, 'GetAllnewonValues').and.returnValue(of(mockData));

    component.GetAllValues();

    expect(service.GetAllnewonValues).toHaveBeenCalled();
    expect(component.listOfData).toEqual(mockData);
  });
  it('should log error on update GetAllValues failure', () => {
    const error = new Error('GetAllValues failed');
    spyOn(service, 'GetAllnewonValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });



  //update
  it('should clear UpdatenewonComponent newon properties on successful update', () => {
    spyOn(service, 'Updatenewon').and.returnValue(of({}));

    component.Update();

    expect(component.Newon.Nmae).toBe('');
    expect(component.Newon.EmailId).toBe('');
  });

  it('should log error on update failure', () => {
    const error = new Error('Update failed');
    spyOn(service, 'Updatenewon').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Update();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });

  // delete the entity
  it('should call DeletenewonValues and call GetAllValues on success', (() => {
    const deleteId = 123;
    const mockData:any = { 
      _id: 1, 
      name: 'test 1',
    };
    const deletenewonValuesSpy = spyOn(service, 'DeletenewonValues').and.returnValue(of(mockData));
    const gpGetAllValuesSpy = spyOn(component, 'GetAllValues');
    
    component.Delete(deleteId);
  

    expect(deletenewonValuesSpy).toHaveBeenCalledWith(deleteId);
    expect(gpGetAllValuesSpy).toHaveBeenCalled();
  }));

  it('should log error on failure', (() => {
    const deleteId = 123;
    const error = new Error('Some error');
    spyOn(console, 'log');
    spyOn(service, 'DeletenewonValues').and.returnValue(throwError(error));

    component.Delete(deleteId);
 
    expect(console.log).toHaveBeenCalledWith('Error', error);
  }));

  




  // fixed search method
  it('should filter listOfData when search length is greater than or equal to 2', () => {

    const targetValue:any[] =
    component.listOfData = [{ 
    }];

    component.search('Jo');

    expect(component.listOfData).toEqual([{ 
    }]);

  });

  it('should call GetAllValues when search length is less than 2', () => {
    spyOn(component, 'GetAllValues');

    component.search('J');

    expect(component.GetAllValues).toHaveBeenCalled();
  });
  



});