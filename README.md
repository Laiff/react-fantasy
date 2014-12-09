react-fantasy
=============

Rendering ```fantasyland``` structures in React

## Options

Option is a container for value, witch encapsulate null check condition. Allow replace ```null``` with ```Option.None``` and write only logic without any checks.

Usage

```js
var React = require('react'),
    Option = require('fantasy-options').Option,
    option = require('react-fantasy').option;

var SomeValue = React.createClass({

    getDefaultProps : function () {
        return {
            value : Option.None;
        }
    },

    renderValue : function (value) {
        return (
            <span className="value">
                {value}
            </span>
        )
    }

    render : function () {
        return option(this.renderValue).render(this.props.value);
    }
});

var SomeContainer = React.createClass({

    getDefaultProps : function () {
        return {
            value : Option.of('Some string');
        }
    },

    render : function () {
        return (
            <div>
                <SomeValue />
                <SomeValue value={this.props.value} />
            </div>
        )
    }
})

```

Rendered as

```html
<div>
    <noscript/>
    <span class="value">
        Some string
    </span>
</div>
```