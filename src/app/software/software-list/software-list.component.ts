import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.sass']
})
export class SoftwareListComponent implements OnInit {

  public isMenuCollapsed = true;

  datas = [{
    "ID": "202010280001",
    "EMPNO": "2043042823",
    "VALIDFROM": "20201022",
    "GOODTHRU": "20201231",
    "EMPNAME": "黃嘉燦",
    "BLOODTYPE": "A",
    "PICFILE": 0,
    "IDNO": "N120351322",
    "BIRTHDAY": "19611217",
    "CONTACT": "0938091009",
    "VENDORID": "86690807",
    "RESIDENCEADDR": "高雄市前金區博孝里11鄰市中一路29號9樓之2",
    "CONTACTADDR": "高雄市前鎮區成功二路25號6樓之3",
    "WORKTYPE": "24",
    "APPLYDEPTNO": "M510",
    "APPLYUSER": "SD0181",
    "STATUS": "",
    "IDFILE": 0,
    "IDFILEAPID": "",
    "CHECKUPFILE": 0,
    "CHECKUPAPID": "",
    "LABORINSURANCEFILE": 0,
    "LABORINSURANCEAPID": "",
    "HEALTHINSURANCEFILE": 0,
    "HEALTHINSURANCEAPID": "",
    "SKILLFILE": 0,
    "SKILLAPID": "",
    "SUBMITDATE": "",
    "SUBMITUSER": "",
    "CREATEUSER": "",
    "CREATEDATE": "",
    "UPDATEUSER": "",
    "UPDATEDATE": "",
    "LEAVEDATE": "",
  },
  {
    "ID": "202010280002",
    "EMPNO": "2044467031",
    "VALIDFROM": "20201022",
    "GOODTHRU": "20211231",
    "EMPNAME": "洪子峻",
    "BLOODTYPE": "B",
    "PICFILE": 0,
    "IDNO": "S125105735",
    "BIRTHDAY": "19970113",
    "CONTACT": "0978356108",
    "VENDORID": "24673765",
    "RESIDENCEADDR": "臺灣高雄市大寮區鳳林三路105巷24弄51號6樓",
    "CONTACTADDR": "臺灣高雄市大寮區鳳林三路105巷24弄51號6樓",
    "WORKTYPE": "10",
    "APPLYDEPTNO": "M510",
    "APPLYUSER": "SD0181",
    "STATUS": "",
    "IDFILE": 0,
    "IDFILEAPID": "",
    "CHECKUPFILE": 0,
    "CHECKUPAPID": "",
    "LABORINSURANCEFILE": 0,
    "LABORINSURANCEAPID": "",
    "HEALTHINSURANCEFILE": 0,
    "HEALTHINSURANCEAPID": "",
    "SKILLFILE": 0,
    "SKILLAPID": "",
    "SUBMITDATE": "",
    "SUBMITUSER": "",
    "CREATEUSER": "",
    "CREATEDATE": "",
    "UPDATEUSER": "",
    "UPDATEDATE": "",
    "LEAVEDATE": "",
  },
  {
    "ID": "202010280003",
    "EMPNO": "2043687415",
    "VALIDFROM": "20201022",
    "GOODTHRU": "20211231",
    "EMPNAME": "謝國光",
    "BLOODTYPE": "AB",
    "PICFILE": 0,
    "IDNO": "F123992436",
    "BIRTHDAY": "19770120",
    "CONTACT": "0936775613",
    "VENDORID": "24673765",
    "RESIDENCEADDR": "臺灣台中市大肚區平等街121號3樓",
    "CONTACTADDR": "臺灣台中市大肚區平等街121號3樓",
    "WORKTYPE": "01",
    "APPLYDEPTNO": "M510",
    "APPLYUSER": "SD0181",
    "STATUS": "",
    "IDFILE": 0,
    "IDFILEAPID": "",
    "CHECKUPFILE": 0,
    "CHECKUPAPID": "",
    "LABORINSURANCEFILE": 0,
    "LABORINSURANCEAPID": "",
    "HEALTHINSURANCEFILE": 0,
    "HEALTHINSURANCEAPID": "",
    "SKILLFILE": 0,
    "SKILLAPID": "",
    "SUBMITDATE": "",
    "SUBMITUSER": "",
    "CREATEUSER": "",
    "CREATEDATE": "",
    "UPDATEUSER": "",
    "UPDATEDATE": "",
    "LEAVEDATE": "",
  },
  {
    "ID": "202010280004",
    "EMPNO": "2044198295",
    "VALIDFROM": "20201022",
    "GOODTHRU": "20211231",
    "EMPNAME": "郭勝生",
    "BLOODTYPE": "O",
    "PICFILE": 0,
    "IDNO": "S120247176",
    "BIRTHDAY": "19740518",
    "CONTACT": "0912770986",
    "VENDORID": "24673765",
    "RESIDENCEADDR": "臺灣高雄市大寮區仁德路7巷6號",
    "CONTACTADDR": "臺灣高雄市大寮區仁德路7巷6號",
    "WORKTYPE": "01",
    "APPLYDEPTNO": "M510",
    "APPLYUSER": "SD0181",
    "STATUS": "",
    "IDFILE": 0,
    "IDFILEAPID": "",
    "CHECKUPFILE": 0,
    "CHECKUPAPID": "",
    "LABORINSURANCEFILE": 0,
    "LABORINSURANCEAPID": "",
    "HEALTHINSURANCEFILE": 0,
    "HEALTHINSURANCEAPID": "",
    "SKILLFILE": 0,
    "SKILLAPID": "",
    "SUBMITDATE": "",
    "SUBMITUSER": "",
    "CREATEUSER": "",
    "CREATEDATE": "",
    "UPDATEUSER": "",
    "UPDATEDATE": "",
    "LEAVEDATE": "",
  },
  {
    "ID": "202010280005",
    "EMPNO": "2043708023",
    "VALIDFROM": "20201022",
    "GOODTHRU": "20211231",
    "EMPNAME": "林耀廷",
    "BLOODTYPE": "O",
    "PICFILE": 0,
    "IDNO": "S123428762",
    "BIRTHDAY": "19820924",
    "CONTACT": "0925666557",
    "VENDORID": "24673765",
    "RESIDENCEADDR": "臺灣高雄市鳳山區國泰路二段13巷2弄9之4號",
    "CONTACTADDR": "臺灣高雄市鳳山區國泰路二段13巷2弄9之4號",
    "WORKTYPE": "01",
    "APPLYDEPTNO": "M510",
    "APPLYUSER": "SD0181",
    "STATUS": "",
    "IDFILE": 0,
    "IDFILEAPID": "",
    "CHECKUPFILE": 0,
    "CHECKUPAPID": "",
    "LABORINSURANCEFILE": 0,
    "LABORINSURANCEAPID": "",
    "HEALTHINSURANCEFILE": 0,
    "HEALTHINSURANCEAPID": "",
    "SKILLFILE": 0,
    "SKILLAPID": "",
    "SUBMITDATE": "",
    "SUBMITUSER": "",
    "CREATEUSER": "",
    "CREATEDATE": "",
    "UPDATEUSER": "",
    "UPDATEDATE": "",
    "LEAVEDATE": "",
  },];

  profileData = {
    "ID": "202010280134",
    "EMPNO": "2422852007",
    "VALIDFROM": "20201022",
    "GOODTHRU": "20211231",
    "EMPNAME": "王信翰",
    "BLOODTYPE": "A",
    "CONTACTADDR": "桃園縣平鎮市義興里26鄰新興路27號",
  };

  constructor(private fb: FormBuilder) {
    this.profileForm.patchValue(this.profileData);


    const worklistformList = this.worklistform.controls.list as FormArray;
    for (let data of this.datas) {
      worklistformList.push(this.fb.group({
        ID: [''],
        EMPNO: ['', Validators.required],
        VALIDFROM: [''],
        GOODTHRU: [''],
        EMPNAME: ['', Validators.required],
        BLOODTYPE: [''],
        CONTACTADDR: [''],
      }));
    }
    worklistformList.patchValue(this.datas);

  }

  profileForm = this.fb.group({
    ID: [''],
    EMPNO: ['', Validators.required],
    VALIDFROM: [''],
    GOODTHRU: [''],
    EMPNAME: ['', Validators.required],
    BLOODTYPE: [''],
    CONTACTADDR: [''],
  });

  worklistform = this.fb.group({
    list: this.fb.array([])
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.profileForm.value);
  }

  onArraySubmit(index): void {
    console.warn(index);
  }

  onArrayAddRow(): void {
    const worklistformList = this.worklistform.controls.list as FormArray;
    worklistformList.push(this.fb.group({
      ID: [''],
      EMPNO: ['', Validators.required],
      VALIDFROM: [''],
      GOODTHRU: [''],
      EMPNAME: ['', Validators.required],
      BLOODTYPE: [''],
      CONTACTADDR: [''],
    }));
  }

  onArrayDelete(index): void {
    const worklistformList = this.worklistform.controls.list as FormArray;
    worklistformList.removeAt(index);
  }

  // tslint:disable-next-line: typedef
  getArrayRowField(index, name) {
    // list須同時對應formbuilder和html裡的名稱
    return this.worklistform.get('list')['controls'][index].get(name);
  }

}
