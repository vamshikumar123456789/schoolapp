import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllSudentsService } from '../all-sudents.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  public id:any="";
  public student:any={};

  constructor (private activatedRoute:ActivatedRoute,private allsudentsSerice:AllSudentsService){
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        allsudentsSerice.getinformation(this.id).subscribe(
          (data:any)=>{
            this.student = data;
          }
        )
      }
    )
  }
}
