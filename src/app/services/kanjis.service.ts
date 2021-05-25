import { Injectable } from '@angular/core';
import { kanjis } from '../../assets/kanji';

@Injectable({
  providedIn: 'root'
})
export class KanjisService {

  constructor() { }

  getKanjis() {
    return kanjis;
  }
}
