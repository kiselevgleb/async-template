'use strict';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const readData = await read(); 
    const jsonData = await json(readData); 
    return jsonData;
  }
}