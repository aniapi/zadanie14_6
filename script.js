var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('button', {}, 'Licznik ' + this.state.counter)
        );
    }
});



var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.decrement},
            React.createElement('button', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));


// getDefaultProps
// getInitialState
// componentWillMount
// render
// componentDidMount
// componentWillReceiveProps
// shouldComponentUpdate
// componentWillUpdate
// componentDidUpdate
// componentWillUnmount