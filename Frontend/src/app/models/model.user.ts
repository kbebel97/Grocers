export class User {
  constructor(public _id: number, public username: string, public userId: string, public password: string, 
        public token:string, public fetchedUser: string) { }
}
