import {Page, NavParams} from 'ionic/ionic';
import {SWApi} from '../../providers/sw-api';

@Page({
  templateUrl: 'build/pages/pageDetail/pageDetail.html',
  providers: [SWApi]
})
export class PageDetail {
  constructor(sWApi: SWApi, navParams: NavParams) {
    this.person = navParams.get('person');
    sWApi.getAll(this.person.films).then(films => this.films = films);
    sWApi.getAll(this.person.species).then(species => this.species = species);
    sWApi.getAll(this.person.starships).then(starships => this.starships = starships);
  }
}
