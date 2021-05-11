import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myWish'
})
export class TranformedWishPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value,args)
    return 'Hello Mr '+ value +' '+ args[0];
  }

}
