import { stat } from 'fs';
import Crawler from './Crawler';
import Stats from './Stats';

 async function main() {
   console.log("1")
   const crawler = await Crawler.create('rickrribeiro');
   console.log("222222222222222222222222222222222222222222222222222222222222222222222222222222222222")
   console.log('crawler changed?', crawler.hasChanged);
   var stats = await Stats.create(crawler);
   console.log("4444444444444444444444444444444444444444444444444444444444444444444444444444444444444")
   try {
     console.log('stats changed?', Object.keys(stats.stats.repositories));
     stats.save()
    } catch (error) {
    stats.save()
    console.log('err'+ error);
  }
  
};

main()