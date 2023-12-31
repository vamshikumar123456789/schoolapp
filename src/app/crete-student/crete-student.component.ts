import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crete-student',
  templateUrl: './crete-student.component.html',
  styleUrls: ['./crete-student.component.scss']
})
export class CreteStudentComponent {
public studentForm:FormGroup = new FormGroup({
  name:new FormControl(),
  class:new FormControl(),
  fathername: new FormControl(),
  email:new FormControl(),
  dob:new FormControl(),
  address:new FormGroup({
  city:new FormControl(),
  state:new FormControl(),
  pincode:new FormControl()
  }),
  cards:new FormArray([]),
  type:new FormControl,
  busfee: new FormControl,
  hostelfee: new FormControl
})
get cardsFormArray(){
  return this.studentForm.get('cards') as FormArray;
}

addmarks(){
  this.cardsFormArray.push(
    new FormGroup({
      internal:new FormControl(),
      practical:new FormControl(),
      assaignment: new FormControl(),
      final: new FormControl()
    })
  )
}

submit(){
  console.log(this.studentForm)
}
deletemarks(i:number){
this.cardsFormArray.removeAt(i)
}
}
