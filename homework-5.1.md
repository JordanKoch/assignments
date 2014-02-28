
`WOW/dist/wow.js:15-19`
```javascript
        //If type of key is an object, then ...I don't know
        if (typeof result[key] === "object") {
          result[key] = extend(result[key], value);
        } else {
          result[key] || (result[key] = value);
        }
```

`WOW/dist/wow.js:33-41`
```javascript
      //If options equals null, options equal empty dict?
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.config = extend(options, this.defaults);
      this.scrolled = true;
    }
```

`WOW/dist/wow.js:45-50`
```javascript
      //If _ref is interactive and complete, return this.start function; Else return return document.addEventListener function.
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        return this.start();
      } else {
        return document.addEventListener('DOMContentLoaded', this.start);
      }
    };
```
`WOW/dist/wow.js:56-66`
```javascript
      //If this blefhgj i don't know
      if (this.boxes.length) {
        _ref = this.boxes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          box = _ref[_i];
          this.applyStyle(box, true);
        }
        window.addEventListener('scroll', this.scrollHandler, false);
        window.addEventListener('resize', this.scrollHandler, false);
        return this.interval = setInterval(this.scrollCallback, 50);
      }
    };
```

`WOW/dist/wow.js:71-74`
```javascript
      //If this.interval does not equal null, return clearInterval(this.interval)
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };
```
`WOW/dist/wow.js:92-102`
```
      //Guard statement for duration of animation.
      if (duration) {
        style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
      }
      //Guard statement for delay of animation
      if (delay) {
        style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
      }
      //Guard statement for iteration of animation
      if (iteration) {
        style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
      }
      return style;
    };
```
`WOW/dist/wow.js:110-133`
```javascript
      //If scrolled, play animation?
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };
```