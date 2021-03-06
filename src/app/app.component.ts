import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'Facebook feeds';
  selected: string = '';
  fbwidgetLinks: Array<any> = [
    {
      "name": "CORP",
      "link": "https://www.facebook.com/weareamericanwater"
    },
    {
      "name": "California",
      "link": "https://www.facebook.com/caamwater"
    },
    {
      "name": "Hawaii",
      "link": ""
    },
    {
      "name": "Iowa",
      "link": "https://www.facebook.com/iowaamwater"
    },
    {
      "name": "Illinois",
      "link": "https://www.facebook.com/ilamwater"
    },
    {
      "name": "Indiana",
      "link": "https://www.facebook.com/IndianaAmericanWater"
    },
    {
      "name": "Kentucky",
      "link": "https://www.facebook.com/KentuckyAmericanWater"
    },
    {
      "name": "Maryland",
      "link": "https://www.facebook.com/MarylandAmericanWater"
    },
    {
      "name": "Michigan",
      "link": ""
    },
    {
      "name": "Missouri",
      "link": "https://www.facebook.com/missouriaw"
    },
    {
      "name": "New Jersey",
      "link": ""
    },
    {
      "name": "New York",
      "link": "https://www.facebook.com/nyamwater"
    },
    {
      "name": "Pennsylvania",
      "link": "https://www.facebook.com/pennsylvaniaamwater"
    },
    {
      "name": "Tennessee",
      "link": "https://www.facebook.com/tnamwater"
    },
    {
      "name": "Virginia",
      "link": "https://www.facebook.com/VirginiaAmericanWater"
    },
    {
      "name": "West Virginia",
      "link": "https://www.facebook.com/wvamwater"
    }
  ]
  APP_ID: string = '';
  parser: HTMLElement;
  modelFaceTwit: any = {
    facebook: {
      fbLinkSelected: this.fbwidgetLinks[0].link
    }
  }

  constructor(private fb: FacebookService){}

  ngOnInit() {
    this.loadWidget();
  }

  onChange(event: any) {
    this.modelFaceTwit.facebook.fbLinkSelected = event.target.value;
    //this.initFbWIdget(this.modelFaceTwit.facebook.fbLinkSelected);
    this.loadWidget()
  }

  loadWidget() {
    let initParams: InitParams = {
      appId: '1783474715284560',
      xfbml: true,
      version: 'v2.8'
    };
 
    this.fb.init(initParams);
   
  }

  loadFb() {
    const widget = document.getElementById("fbWidget");
    const parent = widget.parentNode;
    widget.parentNode.removeChild(widget);
    var div = document.createElement("div");
    div.id = "fbWidget";
    document.body.appendChild(div);
    this.parser = document.getElementById('fbWidget');
    this.parser.innerHTML = `<div id="fb-root"></div>
       <div class="fb-page" id="fb-page" data-href="`+ this.modelFaceTwit.facebook.fbLinkSelected + `" data-tabs="timeline"
       data-width="800" d data-adapt-container-width="true"  data-height="500" ata-small-header="false"
       data-hide-cover="false" data-show-facepile="true"><blockquote cite="`+ this.modelFaceTwit.facebook.fbLinkSelected + `" class="fb-xfbml-parse-ignore">
                   <a href="`+ this.modelFaceTwit.facebook.fbLinkSelected + `">American Water</a>
               </blockquote></div>`;

    

    this.loadWidget()
  }


}
