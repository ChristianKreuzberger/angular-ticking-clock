# Angular Ticking Clock

This repo contains an Angular Directive for displaying a ticking clock. The focus of this project was to create
a lightweight ticking clock which does not cause any additional digest cycles by using ``$interval`` or ``$timeout``. 
This is important especially for large applications with many watchers, as digest cycles could potentially cause the
whole Angular application to evaluate all of their watchers.

## Installation
You can install this software via
```bash
npm install angular-ticking-clock
```
aswell as 
```bash
bower install angular-ticking-clock
```

## Usage
Include the JavaScript File:
```HTML
<script src="node_modules/angular-ticking-clock/src/angular-ticking-clock.js"></script>
```
*Note*: There will be a minified version of this library soon.

In your Angular JS Application you have to inject ``angular-ticking-clock`` as a module:
```javascript
var app = angular.module('app', [
	// ... your dependendies
	'angular-ticking-clock'
]);
```

You must use this directive as an element! This is because we need exclusive access on the DOM of this element to modify it.
```HTML
    <div>
	    <!-- Clock without any config -->
	    <ticking-clock></ticking-clock>
	</div>

	<div>
	    <!-- Clock with a date-time-format -->
	    <ticking-clock date-time-format="yyyy/mm/dd HH:mm:ss"></ticking-clock>
	</div>

	<div>
	    <!-- Clock with a date-time-format which automatically updates -->
	    <ticking-clock date-time-format="yyyy/mm/dd HH:mm:ss" update-interval="1000"></ticking-clock>
	</div>
```


## Examples

* [Basic Example](examples/basic.html)

## License
We are using the [MIT License](LICENSE). Feel free to use this little project as you like, as long as you keep a copy of the license.