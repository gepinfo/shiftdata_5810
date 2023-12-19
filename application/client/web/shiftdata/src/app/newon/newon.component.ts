import { Component, OnInit, ViewChild } from '@angular/core';
import { NewonService } from './newon.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';


interface DataItem {
  Nmae: String;
  EmailId: String;
  accessProfile: String;
  status: String;
}

@Component({
  selector: 'app-newon',
  templateUrl: './newon.component.html',
  styleUrls: ['./newon.component.scss'],
})

export class NewonComponent implements OnInit {
public searchtickets:any;
    public Newon:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        Nmae: '',
        EmailId: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private newonService: NewonService,
    ) { }

    ngOnInit() {
        this.GetAllValues();
        this.Newon.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }

   showModal(): void {
    this.isVisibleCreate = true;
   }

  handleOk(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }

  handleCancel(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }




     Create() {
      this.isVisibleCreate = false;
        this.newonService.PostAllnewonValues(this.newon).subscribe((data:any) => {
            this.Newon.Nmae = '',
            this.Newon.EmailId = '',
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    filterStatus = [
      { text: 'Active', value: 'ACTIVE' },
      { text: 'In-Active', value: 'INACTIVE' }
    ];
  
    filterAccessProfile = [
      { text: 'Receptionist', value: 'Receptionist' },
      { text: 'Health Care Provide', value: 'Health Care Provide' }
    ]
  
    
  
    listOfData: DataItem[] = [];

    Update() {
        this.newonService.Updatenewon(this.newon).subscribe((data:any) => {
            this.Newon.Nmae = '';
            this.Newon.EmailId = '';
            this.GetAllValues();
            this.isVisibleUpdate = false;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Delete(deleteid:any) {
        this.newonService.DeletenewonValues(deleteid).subscribe((data:any) => {
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    GetAllValues() {
        this.newonService.GetAllnewonValues().subscribe((data: any) => {
            this.listOfData = data;
            console.log(data);
        },
        (error: Error) => {
            console.log('Error', error);
        });
    }


    search(search:any){
    if(search.length >= 2){
        const targetValue: any[] = [];
        this.listOfData.forEach((value: any) => {
            let keys = Object.keys(value);
            for (let i = 0; i < keys.length; i++) {
                if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
                    targetValue.push(value);
                    break;
                }
            }
        });
        this.listOfData = targetValue;
        } else {
            this.GetAllValues();
        }
    }


    cancel(): void {
        this.nzMessageService.info('click cancel');
    }

    confirmDelete(data:any): void {
        this.nzMessageService.info('click confirm');
        this.Delete(data.id);
    }

    getUpdateById(data:any){
        this.isVisibleUpdate = true;
        this.Newon = data;
    }
}

  