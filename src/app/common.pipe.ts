import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'common'
})
export class CommonPipe implements PipeTransform {

  transform(youtubersList:any, commonTerm:any): any[] {
    if(!commonTerm)
    {
      console.log(youtubersList);
      
    return youtubersList;
    }
    else
    {
      console.log(youtubersList);
      
    return youtubersList.filter(std=> std["channelname"].toLowerCase().indexOf(commonTerm.toLowerCase())!==-1)
    }
    
    }
}
