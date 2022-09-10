# numbersapi-wrapper

A wrapper library for [Numbers API](http://numbersapi.com/) build using NodeJS and TypeScript.

## Getting Started

A step by step guide that will tell you how to get the use the library.

### Installation

```
$ npm install wrapper-numbersapi
```

### Usage

Initialize and usage the library in your Node.JS project.

```
import NumbersAPI from 'wrapper-numbersapi'

const numsapi = new NumbersAPI()

await nums.getNumberTrivia(123)
```

Available Options
```
{
	// 'json' is the boolean to toggle JSON response, by default it is set as 'false'
	json: false,

	// 'cacheEnabled' is the boolean to toggle caching, by default it is set as 'false'
	cacheEnabled: false,

	// 'cacheDuration' is the number to set cache duration in seconds, by default it is set as 120 seconds
	cacheDuration: 120 * 1000
}
```

Available Methods

- **getNumberTrivia(input)** : To fetch trivia for a given number.  
	input: 'random' OR any number.  
	example: getNumberTrivia(123)

- **getMathTrivia(input)** : To fetch mathematical trivia for a given number.  
	input: 'random' OR any number.  
	example: getMathTrivia(144)

- **getYearTrivia(input)** : To fetch trivia for a given year.  
	input: 'random' OR any year.  
	example: getYearTrivia(2022)

- **getDateTrivia(input)** : To fetch trivia for a given date.  
	input: 'random' OR any string in format 'MM/DD".  
	example: getDateTrivia('12/25')

## Future Developments

* Type Declerations for auto-fill
* More API options from Numbers API
* Configurable Caching
