import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car, mediaCars } from 'src/app/interface/car.interfaces';
import { SlickCarouselComponent } from "ngx-slick-carousel";
import { stateCarRequest } from 'src/app/config/init.config';
import { StateCarService } from 'src/app/services/state-car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-car-banner',
  templateUrl: './details-car-banner.component.html',
  styleUrls: ['./details-car-banner.component.scss']
})
export class DetailsCarBannerComponent implements OnInit,AfterViewInit {
  @ViewChild("slickModal") slickModal: SlickCarouselComponent;
  @Input() carId:string;
  @Input() reservation:boolean = false;
  @Input() data:Car;
  @Input() imageSubject:BehaviorSubject<Array<mediaCars>>;
  @Input() deleteCta:Function;

  imageOservable:Observable<Array<mediaCars>>;
  slickVisible:boolean = false;
  loadingReservation:boolean = false;
  slides:Array<mediaCars> = [];
  
  slidesConfig:any = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  }

  constructor(
    private stateCarService:StateCarService,
    private router:Router
  ) { }


  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.imageOservable = this.imageSubject.asObservable();
    this.imageOservable.subscribe((data:Array<mediaCars>) => {
      console.log("ILAY DATA",data);
      if (data.length == 0) return;
      this.slides = data;
      setTimeout(()=>{
        if(!this.slickModal.initialized) this.slickModal.initSlick();
      },0.1)
    })
  }

  removeSlide() {
  }
  
  slickInit(e:any) {
  }
  
  breakpoint(e:any) {
  }
  
  afterChange(e:any) {
  }
  
  beforeChange(e:any) {
  }

  driveImage(idImage:string) {
    return `https://drive.google.com/uc?id=${idImage}`;
  }

  toReserveCar(){
    this.loadingReservation = true;
    const query = stateCarRequest(this.carId,{},"true");
    this.stateCarService.updateStateCar(query).subscribe(()=>{
      this.reservation = true;
      this.loadingReservation = false;
    })
  }

  toUpdateCar(){
    this.router.navigateByUrl(`/dashboard/update-car/${this.carId}`);
  }

}
