'use strict';

var Employees = require('./employees');

exports.register = function(req, res){
  Employees.register(req.body);
  res.status(201).json(req.body);
}

exports.list = function(req, res){
  var status = req.query.status;
  console.log(status);
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

exports.fire = function(req, res){
  var id = req.params.employeeId;
  var found = Employees.fire(id);
  if(found){
    res.status(200).json(found);
  } else {
    res.status(404).json({message:'Employee not found'});
  }
}
