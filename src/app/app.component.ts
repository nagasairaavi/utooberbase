import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
//   $(window).on('load',function(){
//     var delayMs = 1500; // delay in milliseconds
    
//     setTimeout(function(){
//         $('#myModal').modal('show');
//     }, delayMs);
// });






showModal: boolean=true;
content: string="This is content!!";
titlle: string="This is title!!"; 

//Bootstrap Modal Close event
hide()
{
  this.showModal = false;
}
newUser(obj){
  console.log(obj);
  
}
}
