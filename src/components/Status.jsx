var React            = require('react');
var Reflux           = require('reflux');
var _                = require('lodash');
var ApiConsumerMixin = require('mozaik/browser').Mixin.ApiConsumer;

var Status = React.createClass({
    mixins: [
        Reflux.ListenerMixin,
        ApiConsumerMixin
    ],

    getInitialState() {
        return {
            status: null
        };
    },

    getApiRequest() {
        return {
            id: 'github.status',
            params: {
                user: this.props.user
            }
        };
    },

    onApiData(status) {
        this.setState({
            status: status
        });
    },

    render() {
        var statusNode = (<div className="widget__body" />);

        if (this.state.status) {
            statusNode = (
                <div className="widget__body">
                    <div className="github__status">
                        <img src={this.state.status} />
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className="widget__header">
                    Github <span className="widget__header__subject">Status</span>
                    <i className="fa fa-github-alt" />
                </div>
                { statusNode }
            </div>
        );
    }
});

module.exports = Status;