import React, {Component, Fragment} from 'react';
import {withAITracking} from '@microsoft/applicationinsights-react-js';
import {ai} from './TelemetryService';
import {withRouter} from 'react-router-dom';

/**
 * This Component provides telemetry with Azure App Insights
 *
 * NOTE: the package '@microsoft/applicationinsights-react-js' has a HOC withAITracking that requires this to be a Class Component rather than a Functional Component
 */
class TelemetryProvider extends Component {
    state = {
        initialized: false
    };

    componentDidMount() {

        console.log(`telemetry-provider props ${this.props.instrumentationKey}`);

        const key = (this.props && this.props.instrumentationKey) ? this.props.instrumentationKey : "";

        if(!Boolean(key)) {
            console.log(`telemetry-provider - key is empty`);
        } else {

            const {history} = this.props;
            const {initialized} = this.state;

            console.log(`telemetry-provider - assigning app insights key - ${key}`);

            if (!Boolean(initialized) && Boolean(key) && Boolean(history)) {

                ai.initialize(key, history);
                this.setState({initialized: true});


                this.props.after(ai);
            } else {
                console.log("telemetry-provider - can't start app Insights")

                this.props.after();
            }


        }


    }

    render() {
        const {children} = this.props;
        return (
            <Fragment>
                {children}
            </Fragment>
        );
    }
}

export default withRouter(withAITracking(ai.reactPlugin, TelemetryProvider));
