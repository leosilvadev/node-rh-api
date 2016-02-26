'use strict';

var Employees = require('./employees');

function getEmployee(body){
  var employee = {
    name: body.name,
    age: body.age,
    salary: body.salary,
    image: body.image
  };
  return employee;
}

exports.register = function(req, res){
  var employee = getEmployee(req.body);
  Employees.register(employee);
  res.status(201).json(req.body);
}

exports.list = function(req, res){
  var status = req.query.status;
  if(status && (status==='active' || status==='fired')){
    res.status(200).json(Employees.list(status));

  } else {
    res.status(200).json(Employees.listAll());

  }
}

exports.find = function(req, res){
  var id = req.params.employeeId;
  var found = Employees.find(id);
  if(found){
    res.status(200).json(found);
  } else {
    res.status(404).json({message:'Employee not found'});
  }
}

exports.update = function(req, res){
  var employee = getEmployee(req.body);
  var id = req.params.employeeId;
  Employees.update(id, employee);
  res.status(200).json(employee);
}

exports.fire = function(req, res){
  var id = req.params.employeeId;
  var found = Employees.fire(id);
  if(found){
    res.status(200).json(found);
  } else {
    res.status(404).json({message:'Employee not found'});
  }
}
