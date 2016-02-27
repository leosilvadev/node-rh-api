'use strict';

function Employees(){

  this.employees = [];
  this.nextId = 1;

  this.register = function(emp){
    emp.id = this.nextId;
    this.nextId++;
    emp.status = 'active';
    this.employees.push(emp);
    return emp;
  };

  this.update = function(id, emp){
    var found = this.find(id);
    found.name = emp.name;
    found.salary = emp.salary;
    found.age = emp.age;
    found.job = emp.job;
    found.image = emp.image;
    return found;
  };

  this.find = function(id){
    var found = this.employees.find(function(obj){
      return obj.id == id ;
    });
    return found;
  };

  this.fire = function(id){
    var found = this.find(id);
    if(found) {
      found.status = 'fired';
      return found;
    }
  };

  this.list = function(status){
    status = status || 'active';
    return this.employees.filter(function(obj){
      return obj.status == status;
    });
  };

  this.listAll = function(status){
    return this.employees;
  };

}

console.log(new Employees());

module.exports = new Employees();
