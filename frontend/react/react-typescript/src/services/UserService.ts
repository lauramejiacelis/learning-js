import { IUserr } from "../models/IUserr";

export class UserService{
  private static users :IUserr[] = [
    {
      sno: 'AAA101',
      name: 'Rajan',
      age: 25,
      designation: 'Software Engineer',
      company: 'Infosys'
    },
    {
      sno: 'AAA102',
      name: 'John',
      age: 35,
      designation: 'Web Developer',
      company: 'Globant'
    },
    {
      sno: 'AAA103',
      name: 'Camila',
      age: 25,
      designation: 'Frontend Developer',
      company: 'Spphos'
    },
    {
      sno: 'AAA104',
      name: 'Sarah',
      age: 43,
      designation: 'Project Manager',
      company: 'Spphos'
    }
  ];
  public static getAllUsers(){
    return this.users;
  }
}