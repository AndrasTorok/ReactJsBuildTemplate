export class Person{
    constructor(
        public firstName: string,
        public lastName: string
    ){
        
    }    
    
    toString(): string{
        return this.firstName + ' ' + this.lastName;
    }
}