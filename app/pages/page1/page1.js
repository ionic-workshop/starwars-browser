import {Page, NavController} from 'ionic/ionic';
import {SWApi} from '../../providers/sw-api';
import {PageDetail} from '../pageDetail/pageDetail';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [SWApi]
})
export class Page1 {
  constructor(sWApi: SWApi, nav: NavController) {
    sWApi.getPeople().then(people => {
      console.log('people', people);
      this.people = people;
    });
    console.log(Promise.all);
    this.nav = nav;
  }

  goToOtherPage(person){
    this.nav.push(PageDetail, {person: person});
  }
}
