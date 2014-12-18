react-fantasy
=============

Rendering ```fantasyland``` structures in React.

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
        return foldable(this.renderValue).exec(this.props.value);
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

## Type checkers

Add check propTypes and contextTypes for fantasy structures such as Option, Seq and Json. In future will be added Either, Readers, Writers and State

PropTypes example:

```js
var fpt = require('react-fantasy').PropTypes;

var SomeClass = React.createClass({
    ...
    propTypes : {
        page: fpt.option.isRequired,
        items: fpt.seq.isRequired,
        config: fpt.json.isRequired
    }
    ...
});
```

Whenever non required values is possible, but that non functional behavior, because before rendering need some checks for ensure what value is present.

## License
MIT
