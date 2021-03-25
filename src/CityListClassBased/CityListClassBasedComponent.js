/**
 class Student{
    constructor(id,name){
        this.id= id;
        this.name= name;
    }
    display(){
        console.log("Name >>"+ this.name);
        console.log("id >>"+ this.id);
    }
}
var s1 = new Student(1,"AMit");
var s2 = new Student(2,"Samadhan");
 */

import React from "react";

export class CityListClassBasedComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>It is class based component</div>;
  }
}
