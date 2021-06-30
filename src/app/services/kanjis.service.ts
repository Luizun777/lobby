import { Injectable } from '@angular/core';
import { kanjis } from 'dist/lobby-app/assets/kanji';

@Injectable({
  providedIn: 'root'
})
export class KanjisService {

  constructor() { }

  getKanjis() {
    return kanjis;
  }
}
