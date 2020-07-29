import { Component,ChangeDetectorRef } from '@angular/core';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';

declare var ml5:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })

export class AppComponent {
  uploadedImage: File;
  
  imageUrl: string | ArrayBuffer=
    "assets/loading.jpg";

  file: File;
  yolo;
  answer;
  loading=0;    //1:analyzing ,2:click analyze ,3:results,4:loading image
  

  constructor(private ng2ImgMax: Ng2ImgMaxService,public sanitizer: DomSanitizer,public ref:ChangeDetectorRef)
  {

  }
  
  ngOnInit(){
    
      // this.yolo=ml5.YOLO(modelLoaded);
      this.yolo=ml5.imageClassifier('MobileNet', ()=>{
        console.log('Model Loaded!');
        this.imageUrl="assets/test4.jfif";
        this.ref.detectChanges();
        setTimeout (() => {
          // console.log("Hello from setTimeout");
          this.onSubmit();
       }, 1000);
        
      });

  }

  onChange(file: File){
  
    if (file){
      this.file = file;
      this.loading=4;
      this.imageUrl="assets/loading.jpg";
      this.ng2ImgMax.resizeImage(file, 600, 600).subscribe(
        result => {
        this.uploadedImage = new File([result], result.name);
      
        
        const reader = new FileReader();
        
        reader.readAsDataURL(result);
        
        reader.onload = event => {
        this.imageUrl = reader.result;
        this.loading=2;

      };
      error => {
        console.log('Oh no!', error);
          }
      });
    }
  }

  onSubmit(){
    this.loading=1;
    // this.ref.detectChanges();
    this.yolo.predict(document.getElementById("abc"),(err,img)=>{
      // console.log("done");
      // console.log(img);
      this.answer=img;
      this.loading=3;
      this.ref.detectChanges();
    })

  }
}

