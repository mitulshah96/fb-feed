import { Component, OnInit } from '@angular/core';


declare var window:any;
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
      "link": "https://www.facebook.com/weareamericanwater/"
    },
    {
      "name": "California",
      "link": "https://www.facebook.com/caamwater/"
    },
    {
      "name": "Hawaii",
      "link": ""
    },
    {
      "name": "Iowa",
      "link": "https://www.facebook.com/iowaamwater/"
    },
    {
      "name": "Illinois",
      "link": "https://www.facebook.com/ilamwater/"
    },
    {
      "name": "Indiana",
      "link": "https://www.facebook.com/IndianaAmericanWater/"
    },
    {
      "name": "Kentucky",
      "link": "https://www.facebook.com/KentuckyAmericanWater/"
    },
    {
      "name": "Maryland",
      "link": "https://www.facebook.com/MarylandAmericanWater/"
    },
    {
      "name": "Michigan",
      "link": ""
    },
    {
      "name": "Missouri",
      "link": "https://www.facebook.com/missouriaw/"
    },
    {
      "name": "New Jersey",
      "link": ""
    },
    {
      "name": "New York",
      "link": "https://www.facebook.com/nyamwater/"
    },
    {
      "name": "Pennsylvania",
      "link": "https://www.facebook.com/pennsylvaniaamwater/"
    },
    {
      "name": "Tennessee",
      "link": "https://www.facebook.com/tnamwater/"
    },
    {
      "name": "Virginia",
      "link": "https://www.facebook.com/VirginiaAmericanWater/"
    },
    {
      "name": "West Virginia",
      "link": "https://www.facebook.com/wvamwater/"
    }
  ]
  APP_ID: string = ''
  modelFaceTwit: any = {
    facebook: {
      fbLinkSelected: 'https://www.facebook.com/weareamericanwater/'
    }
  }


  ngOnInit() {
    this.loadFb();
  }

  onChange(event: any) {
    this.modelFaceTwit.facebook.fbLinkSelected = event.target.value
    this.initFbWIdget(this.modelFaceTwit.facebook.fbLinkSelected);
  }

  loadFb() {
    console.log('I am called')
    this.APP_ID = '1783474715284560';
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1783474715284560"
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
  }

  initFbWIdget(url){
    console.log(url)
    document.getElementById('fbWidget').innerHTML='';
    var parser=document.getElementById('fbWidget');
    parser.innerHTML=`<div id="fb-root"></div>
    <div class="fb-page" id="fb-page" data-href="`+ url + `" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true"
        data-hide-cover="false" data-show-facepile="true">
        <div class="fb-xfbml-parse-ignore">
            <blockquote cite="https://www.facebook.com/facebook">
                <a href="https://www.facebook.com/facebook">Facebook</a>
            </blockquote>
        </div>
    </div>`;
    

    if(window.FB){
        window.FB.XFBML.parse(parser);
    }
    this.loadFb()
  }
}
