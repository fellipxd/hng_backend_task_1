# Number Classification API

## Overview
A Node.js and Express-based microservice for classifying numbers and providing mathematical insights.

## Features
- Prime number detection
- Perfect number identification
- Armstrong number recognition
- Digit sum calculation
- Fun fact retrieval

## API Endpoint
`GET /api/classify-number?number={number}`

### Example Response
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number..."
}
```

## Local Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm start`

## Deployment
Recommended platforms:
- Vercel


## Technology Stack
- Node.js
- Express.js
- Axios for API requests
