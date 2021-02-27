import * as React from "react";
import { Position, Toaster } from "@blueprintjs/core";

const AppToaster = Toaster.create({
    className: "recipe-toaster",
    position: Position.TOP_RIGHT,
});
export default class Toast extends React.PureComponent {
    componentDidMount() {
        const {intent, message, timeOut} = this.props;
        this.showToast(intent, message, timeOut);
    }
    componentWillUnmount() {
        AppToaster.dismiss();
    }
    showToast = (intent, message, timeOut) => {
        // create toasts in response to interactions.
        // in most cases, it's enough to simply create and forget (thanks to timeout).
        AppToaster.show({  message, intent: intent || 'success', timeout: timeOut || 3000 });
    }
    render() {
        return <div/>;
    }
}
