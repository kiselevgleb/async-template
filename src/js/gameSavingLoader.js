'use strict';
import read from './reader';
import json from './parser';
export default class GameSavingLoader {
  static async load() {
    try {
    const readData = await read(); 
    const jsonData = await json(readData); 
    return jsonData;}
    catch {
      return "error";
    }
  }
}