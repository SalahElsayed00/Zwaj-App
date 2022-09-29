import { Photo } from './photo';

export interface User {
    id:number;
    userName:string;
    asKnown:string;
    age:number;
    gender:string;
    createdDate:Date;
    lastActive:Date;
    photoUrl:string;
    city:string;
    country:string;
    interests?:string;
    introduction?:string;
    lookingFor?:string;
    photos?:Photo[];
}
