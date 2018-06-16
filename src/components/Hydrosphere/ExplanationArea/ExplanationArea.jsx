import React, { Component } from 'react'; 
import Iroh from "../../../../node_modules/iroh/dist/iroh-node";
import ButtonRun from "../ButtonRun";
import ErrorMessage from "../ErrorMessage";
import Editor from "../Editor";
import CallStackArea from "../CallStackArea";
import CallStack from "../CallStackArea/CallStack";
import SubTitle from "../SubTitle";
import Water from "../Water";

import { 
    getCodeES5,
    UNSAFE_deepCopy as deepCopy,
    getCurrentCallStackItemEnter,
    getCurrentCallStackItemLeave
} from "../../../helpers";
import { editorInitialCode } from "../../../data/hydrosphereData";

import styles from './ExplanationArea.css';

class ExplanationArea extends Component {
    state = {
        editorValue: editorInitialCode,
        editorActive: true,
        callStack: null,
        codeError: null,
    }

    handleChangeEditor = (editorValue) => {
        this.setState({ editorValue, codeError: null, callStack: null });
    }

    handleClickRunBtn = () => {
        this.setState({ editorActive: false });
        const editorValueES5 = getCodeES5(this.state.editorValue);

        try {
            const stage = new Iroh.Stage(editorValueES5);
            const callStack = [];
            let callStackItemID = 0;

            stage.addListener(Iroh.FUNCTION).on("enter", (e) => {
                callStackItemID++;
                const currentCallStackItem = getCurrentCallStackItemEnter(callStack, callStackItemID, e.name);
                callStack.push(currentCallStackItem);
                this.setState({ callStack })
            });

            stage.addListener(Iroh.FUNCTION).on("leave", (e) => {
                const currentCallStackItem = getCurrentCallStackItemLeave(callStack, callStackItemID, e.name);
                callStack.push(currentCallStackItem);
                this.setState({ callStack });
            });

            stage.addListener(Iroh.FUNCTION).on("return", (e) => {
                const currentCallStackItem = getCurrentCallStackItemLeave(callStack, callStackItemID, e.name);
                callStack.push(currentCallStackItem);
                this.setState({ callStack });
            });

            eval(stage.script);
        } catch(e) {
            this.setState({
                callStack: null,
                codeError: `Error: ${e.message}`, 
                editorActive: true
            });
        }
    }

    endAnimation = () => {
        this.setState({ editorActive: true });
    }

    render() {
        const { editorValue, editorActive, callStack, codeError } = this.state;
        return (
            <div id="explanationCallStack" className={styles.callStackYourSelf}>
                <Water />
                <SubTitle value="call stack" />
                <div className={styles.callStackExplanationContainer}>
                    <div className={styles.callStackExplanation}>
                        <ButtonRun
                            className={styles.runCode}
                            active={editorActive}
                            onClickActive={this.handleClickRunBtn}
                        />
                        <ErrorMessage className={styles.error} message={codeError} />
                        <section>
                            <Editor 
                                onChange={this.handleChangeEditor}
                                value={editorValue}
                                readOnly={!editorActive}
                                highlightActiveLine={editorActive}
                                className={styles.editor}
                                name="editor"
                            />
                            <CallStackArea className={styles.callStackArea}>
                                { callStack ?
                                    <CallStack
                                        data={deepCopy(callStack)}
                                        onAnimationEnd={this.endAnimation}
                                        onChangelineNumber={this.onChangelineNumber}
                                    /> : null }
                            </CallStackArea>
                        </section>
                    </div>    
                </div>
            </div>
        )
    }
}

export default ExplanationArea;