define({ "api": [
  {
    "type": "delete",
    "url": "/v1/employees/:id",
    "title": "Fire",
    "name": "Fire",
    "group": "Employees",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "https://fatea-rh.herokuapp.com/v1/employees/1"
      }
    ],
    "success": {
      "fields": {
        "Ok 200": [
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Ok 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Employee age</p>"
          },
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Employee job name</p>"
          },
          {
            "group": "Ok 200",
            "type": "Number",
            "optional": false,
            "field": "salary",
            "description": "<p>Employee salary</p>"
          },
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Url of employee pic</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ok-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Any name\",\n  \"age\": 27,\n  \"job\": \"Any job\",\n  \"salary\": 10312.20,\n  \"image\": \"Any url\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "employee/routes.js",
    "groupTitle": "Employees"
  },
  {
    "type": "get",
    "url": "/v1/employees/:id",
    "title": "Get",
    "name": "Get",
    "group": "Employees",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "https://fatea-rh.herokuapp.com/v1/employees/1"
      }
    ],
    "success": {
      "fields": {
        "Ok 200": [
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Ok 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Employee age</p>"
          },
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Employee job name</p>"
          },
          {
            "group": "Ok 200",
            "type": "Number",
            "optional": false,
            "field": "salary",
            "description": "<p>Employee salary</p>"
          },
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Url of employee pic</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ok-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Any name\",\n  \"age\": 27,\n  \"job\": \"Any job\",\n  \"salary\": 10312.20,\n  \"image\": \"Any url\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "employee/routes.js",
    "groupTitle": "Employees"
  },
  {
    "type": "get",
    "url": "/v1/employees",
    "title": "List",
    "name": "List",
    "group": "Employees",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "https://fatea-rh.herokuapp.com/v1/employees"
      }
    ],
    "success": {
      "fields": {
        "Ok 200": [
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Ok 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Employee age</p>"
          },
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Employee job name</p>"
          },
          {
            "group": "Ok 200",
            "type": "Number",
            "optional": false,
            "field": "salary",
            "description": "<p>Employee salary</p>"
          },
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Url of employee pic</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ok-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"name\": \"Any name\",\n  \"age\": 27,\n  \"job\": \"Any job\",\n  \"salary\": 10312.20,\n  \"image\": \"Any url\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "employee/routes.js",
    "groupTitle": "Employees"
  },
  {
    "type": "post",
    "url": "/v1/employees",
    "title": "Registration",
    "name": "Registration",
    "group": "Employees",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Employee age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Employee job name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salary",
            "description": "<p>Employee salary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Url of employee pic</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request (example):",
          "content": "{\n  \"name\":\"Employee name\",\n  \"age\": 30,\n  \"job\":\"Employee job\",\n  \"salary\":2030.20,\n  \"image\":\"http://...*.png\"\n}",
          "type": "json"
        },
        {
          "title": "Created-Response:",
          "content": "HTTP/1.1 201 Created\n[{\n  \"name\": \"Any name\",\n  \"age\": 27,\n  \"job\": \"Any job\",\n  \"salary\": 10312.20,\n  \"image\": \"Any url\"\n}]",
          "type": "json"
        }
      ],
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Employee age</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Employee job name</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "salary",
            "description": "<p>Employee salary</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Url of employee pic</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://fatea-rh.herokuapp.com/v1/employees"
      }
    ],
    "filename": "employee/routes.js",
    "groupTitle": "Employees"
  },
  {
    "type": "put",
    "url": "/v1/employees/:id",
    "title": "Update",
    "name": "Update",
    "group": "Employees",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Employee age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Employee job name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salary",
            "description": "<p>Employee salary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Url of employee pic</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request (example):",
          "content": "{\n  \"name\":\"Employee name\",\n  \"age\": 30,\n  \"job\":\"Employee job\",\n  \"salary\":2030.20,\n  \"image\":\"http://...*.png\"\n}",
          "type": "json"
        },
        {
          "title": "Ok-Response:",
          "content": "HTTP/1.1 200 Ok\n[{\n  \"name\": \"Any name\",\n  \"age\": 27,\n  \"job\": \"Any job\",\n  \"salary\": 10312.20,\n  \"image\": \"Any url\"\n}]",
          "type": "json"
        }
      ],
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Employee age</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Employee job name</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "salary",
            "description": "<p>Employee salary</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Url of employee pic</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://fatea-rh.herokuapp.com/v1/employees/1"
      }
    ],
    "filename": "employee/routes.js",
    "groupTitle": "Employees"
  }
] });
