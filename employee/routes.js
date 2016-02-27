'use strict';

var router = require('express').Router();
var controller = require('./controller');

/**
* @api {post} /v1/employees Registration
* @apiName Registration
* @apiGroup Employees
* @apiVersion 1.0.0

* @apiParam {String} name Employee name
* @apiParam {Number} age Employee age
* @apiParam {String} job Employee job name
* @apiParam {Number} salary Employee salary
* @apiParam {String} image Url of employee pic

* @apiParamExample {json} Request-Example:
* {
*   "name":"Employee name",
*   "age": 30,
*   "job":"Employee job",
*   "salary":2030.20,
*   "image":"http://...*.png"
* }

* @apiSampleRequest https://fatea-rh.herokuapp.com/v1/employees
*
* @apiSuccess (Created 201) {String} name Employee name
* @apiSuccess (Created 201) {Number} age Employee age
* @apiSuccess (Created 201) {String} job Employee job name
* @apiSuccess (Created 201) {Number} salary Employee salary
* @apiSuccess (Created 201) {String} image Url of employee pic

* @apiSuccessExample {json} Created-Response:
* HTTP/1.1 201 Created
* [{
*   "name": "Any name",
*   "age": 27,
*   "job": "Any job",
*   "salary": 10312.20,
*   "image": "Any url"
* }]
*/
router.post('/', controller.register);

/**
* @api {get} /v1/employees List
* @apiName List
* @apiGroup Employees
* @apiVersion 1.0.0
*
* @apiSampleRequest https://fatea-rh.herokuapp.com/v1/employees
*
* @apiSuccess (Ok 200) {String} name Employee name
* @apiSuccess (Ok 200) {Number} age Employee age
* @apiSuccess (Ok 200) {String} job Employee job name
* @apiSuccess (Ok 200) {Number} salary Employee salary
* @apiSuccess (Ok 200) {String} image Url of employee pic

* @apiSuccessExample {json} Ok-Response:
* HTTP/1.1 200 OK
* [{
*   "name": "Any name",
*   "age": 27,
*   "job": "Any job",
*   "salary": 10312.20,
*   "image": "Any url"
* }]
*/
router.get('/', controller.list);

/**
* @api {get} /v1/employees/:id Get
* @apiName Get
* @apiGroup Employees
* @apiVersion 1.0.0
*
* @apiSampleRequest https://fatea-rh.herokuapp.com/v1/employees/1
*
* @apiSuccess (Ok 200) {String} name Employee name
* @apiSuccess (Ok 200) {Number} age Employee age
* @apiSuccess (Ok 200) {String} job Employee job name
* @apiSuccess (Ok 200) {Number} salary Employee salary
* @apiSuccess (Ok 200) {String} image Url of employee pic

* @apiSuccessExample {json} Ok-Response:
* HTTP/1.1 200 OK
* {
*   "name": "Any name",
*   "age": 27,
*   "job": "Any job",
*   "salary": 10312.20,
*   "image": "Any url"
* }
*/
router.get('/:employeeId', controller.find);

/**
* @api {put} /v1/employees/:id Update
* @apiName Update
* @apiGroup Employees
* @apiVersion 1.0.0

* @apiParam {String} name Employee name
* @apiParam {Number} age Employee age
* @apiParam {String} job Employee job name
* @apiParam {Number} salary Employee salary
* @apiParam {String} image Url of employee pic

* @apiParamExample {json} Request-Example:
* {
*   "name":"Employee name",
*   "age": 30,
*   "job":"Employee job",
*   "salary":2030.20,
*   "image":"http://...*.png"
* }

*
* @apiSampleRequest https://fatea-rh.herokuapp.com/v1/employees/1
*
* @apiSuccess (Created 201) {String} name Employee name
* @apiSuccess (Created 201) {Number} age Employee age
* @apiSuccess (Created 201) {String} job Employee job name
* @apiSuccess (Created 201) {Number} salary Employee salary
* @apiSuccess (Created 201) {String} image Url of employee pic

* @apiSuccessExample {json} Ok-Response:
* HTTP/1.1 200 Ok
* [{
*   "name": "Any name",
*   "age": 27,
*   "job": "Any job",
*   "salary": 10312.20,
*   "image": "Any url"
* }]
*/
router.put('/:employeeId', controller.update);


/**
* @api {delete} /v1/employees/:id Fire
* @apiName Fire
* @apiGroup Employees
* @apiVersion 1.0.0
*
* @apiSampleRequest https://fatea-rh.herokuapp.com/v1/employees/1
*
* @apiSuccess (Ok 200) {String} name Employee name
* @apiSuccess (Ok 200) {Number} age Employee age
* @apiSuccess (Ok 200) {String} job Employee job name
* @apiSuccess (Ok 200) {Number} salary Employee salary
* @apiSuccess (Ok 200) {String} image Url of employee pic

* @apiSuccessExample {json} Ok-Response:
* HTTP/1.1 200 OK
* {
*   "name": "Any name",
*   "age": 27,
*   "job": "Any job",
*   "salary": 10312.20,
*   "image": "Any url"
* }
*/
router.delete('/:employeeId', controller.fire);

module.exports = router;
