export default class Students {

    constructor(private firstName:string, private lastName:string){
    }

    GetFullName():string{
        return this.firstName + ' ' + this.lastName;
    }
}