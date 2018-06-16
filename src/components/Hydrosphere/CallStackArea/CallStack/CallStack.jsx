import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CallStackFrame from "../CallStackFrame";
import CallStackAnimationFrame from "../CallStackAnimationFrame";
import { getArrayLastItem, getArrayWithoutLastItem } from "../../../../helpers";

class CallStack extends Component {
    state = {
        currentDataIndex: 0
    }

    endAnimation = () => {
        const currentDataIndex = this.state.currentDataIndex + 1;
        const callStackDataLength = this.props.data.length;

        if (currentDataIndex < callStackDataLength) {
            this.setState({ currentDataIndex });
        } else {
            this.setState({ currentDataIndex: 0 });
            this.props.onAnimationEnd();
        }
    }

    shouldComponentUpdate(nextProps) {
        const { currentDataIndex } = this.state;
        const { data } = this.props;
        if (data === nextProps.data || currentDataIndex === 0) {
            return true;
        }
        return false;
    }
    
    render() {
        const { currentDataIndex } = this.state;
        const { data: callStackData } = this.props;
        const currentData = callStackData[currentDataIndex];
        const prevData = callStackData[currentDataIndex - 1];
        const animationType = (prevData && prevData.length > currentData.length) ? "remove" : "add";
        const dynamicCallStackFrame = (animationType === "add") ? getArrayLastItem(currentData) : getArrayLastItem(prevData);
        let staticCallStackFrames = (animationType === "add") ? getArrayWithoutLastItem(currentData) : currentData;
        const staticCallStackLength = staticCallStackFrames.length;
        const animationClassNumber = staticCallStackLength + 1;
        let animationClassName = `${animationType}_${animationClassNumber}`;

        if (staticCallStackLength >= 10) {
            animationClassName = `${animationType}_${this.prevAnimationNumber === 11 ? 12 : 11}`;
            staticCallStackFrames = [
                ...staticCallStackFrames.slice(0, 3),
                { id: -1, value: "empty_1" },
                { id: -2, value: "empty_2" },
                { id: -3, value: "empty_3" },
                ...staticCallStackFrames.slice(-3)
            ];
            this.prevAnimationNumber = Number(animationClassName.slice(-2));
        }

        return (
            <Fragment>
                { 
                    staticCallStackFrames.map(({ id, value }) => {
                        const isEmpty = value.startsWith("empty");
                        return (
                            <CallStackFrame
                                id={id}
                                key={String(id) + value}
                                value={isEmpty ? "\u2022" : value}
                                transparent={isEmpty}
                            />
                        )
                    })
                }
                <CallStackAnimationFrame
                    id={dynamicCallStackFrame.id}
                    animationClassName={animationClassName}
                    value={dynamicCallStackFrame.value}
                    onFinish={this.endAnimation}
                />
            </Fragment>
        );
    }
}

CallStack.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                value: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    ).isRequired,
};

export default CallStack;