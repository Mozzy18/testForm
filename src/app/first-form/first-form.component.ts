import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl,FormGroup } from '@angular/forms';
import { HttpClient} from '@angular/common/http';






const PRODUCTS_URL = "http://localhost:3000/products";



@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})

export class FirstFormComponent implements OnInit {

  testEmail:any
  validEmail:any
  myForm;
  contactForm:any
  selectedValue:string = ''
  angular: boolean = false
  react: boolean = false
  vue: boolean = false
 
 onBlurEvent(){
  if(this.selectedValue == 'angular'){
    this.angular =true
    this.react = false
    this.vue = false
    
  }
  if(this.selectedValue == 'react'){
    this.angular =false
    this.react = true
    this.vue = false
  }
  if(this.selectedValue == 'vue'){
    this.angular =false
    this.react = false
    this.vue = true
  }
  }
  

    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient){

      this.myForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email:['',[Validators.email]],
      date:['',[Validators.required]],
      framework:['',[Validators.required]],
      version:['',[Validators.required]],
      hobby: this.formBuilder.group({
        name: ['',[Validators.required]],
        duration:['',[Validators.required]]
      }),
      hobby2: this.formBuilder.group({
        name: [''],
        duration:['']
      })
    })
 }   

 ngOnInit(){ 
   this.testEmail = document.getElementById('mail')
   this.httpClient.get(PRODUCTS_URL).subscribe((data)=>{
   this.validEmail = data 
   })
 }

 onSubmit(){ 
   if(this.testEmail.value == this.validEmail.email){
   alert('такой email существует')
 }
 }
}
        
 

 
 

 
   
 

 
  


