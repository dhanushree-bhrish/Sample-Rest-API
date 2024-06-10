# Sample REST API

This is a simple REST API built with Express.js. The API provides a basic endpoint that returns a JSON response.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 12.x or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository or download the source code.
   ```bash
   git clone https://github.com/dhanushree-bhrish/Sample-Rest-API.git
   cd sample-rest-api
2. Install the express for the REST API.
   ```bash
   npm install express
   npm install body-parser
3. Running the API
		To start the API server, run the following command:
```bash
npm start
```
	
  ## API EndPoint

 A simple Get Request which returns JSON response.
 1. Request:
	- Method: GET
	- URL: /
2. Response:
	- Status: 200 OK
  - Body:
	```bash
	{
	  "message": "This is a sample rest api"
	}

## Example:
You can test the API endpoint using a tool like curl or Postman.

### Using curl:

```bash
curl http://localhost:4000/
```

## Dependencies:

- Express - Fast, unopinionated, minimalist web framework for Node.js
- Body-parser - Node.js body parsing middleware
