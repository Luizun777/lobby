import { Injectable } from '@angular/core';
import { Kanjis } from '../../assets/kanji';

@Injectable({
  providedIn: 'root'
})
export class KanjisService {

  constructor() { }

  getKanjis() {
    return Kanjis;
  }
}
