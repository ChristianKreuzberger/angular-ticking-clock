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

## Examples
ToDo

## License
We are using the [MIT License](LICENSE). Feel free to use this little project as you like, as long as you keep a copy of the license.