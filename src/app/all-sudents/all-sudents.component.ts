import { Component } from '@angular/core';
import { AllSudentsService } from '../all-sudents.service';

@Component({
  selector: 'app-all-sudents',
  templateUrl: './all-sudents.component.html',
  styleUrls: ['./all-sudents.component.scss']
})
export class AllSudentsComponent {
public infos:any=[];
public term:string="";
public column:string="";
public order:string="";
public limit:string="";
public page:string="";

constructor(private allsudentsService:AllSudentsService){
  this.allsudentsService.getinfo().subscribe(
    (data:any)=>{
      this.infos=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}

getfilteredinfo(){
  this.allsudentsService.getfilteredinfo(this.term).subscribe(
    (data:any)=>{
      this.infos=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}

getsortedinfo(){
  this.allsudentsService.getsortedinfo(this.column,this.order).subscribe(
    (data:any)=>{
      this.infos=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}

getpagedinfo(){
  this.allsudentsService.getpagedinfo(this.limit,this.page).subscribe(
    (data:any)=>{
      this.infos=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}

deleteinfo(id:any){
  this.allsudentsService.deleteinfo(id).subscribe(
    (data:any)=>{
      alert("delete successfully");
      location.reload();
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
}
