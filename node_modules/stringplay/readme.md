# @stringplay

Uppercase or lowercase a string from given starting index to end index

## Install

```
$ npm install stringplay
```

## Usage

```js
const play= require("stringplay");

play.upper("something to change",3 ,7);
//=> "somETHIng to change"

play.lower("SOMETHING TO CHANGE",3 ,7);
//=> "SOMethiNG TO CHANGE"
