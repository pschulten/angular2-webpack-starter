import Unicorn = template.Unicorn;
export class AngularUnicorn implements Unicorn {
  
  constructor(public id: number,
              public name: string,
              public nerdy: boolean,
              public color: string
  ) {
  }
}
