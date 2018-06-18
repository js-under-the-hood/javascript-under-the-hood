import React, { Component } from 'react'; 
import Iroh from "../../../../node_modules/iroh/dist/iroh-node";
import ButtonRun from "../ButtonRun";
import ErrorMessage from "../ErrorMessage";
import Editor from "../Editor";
import CallStackArea from "../CallStackArea";
import CallStack from "../CallStackArea/CallStack";
import SubTitle from "../SubTitle";
import CodeExamples from "../CodeExamples";
import Water from "../Water";

import { 
    getCodeES5,
    UNSAFE_deepCopy as deepCopy,
    getCurrentCallStackItemEnter,
    getCurrentCallStackItemLeave,
    issetTimeoutInterval,
} from "../../../helpers";
import { codeExamples } from "../../../data/hydrosphereData";

import styles from './ExplanationArea.css';

class ExplanationArea extends Component {
    state = {
        editorValue: codeExamples[1].code,
        editorActive: true,
        callStack: null,
        codeError: null,
        selectedRadio: 1,
    }

    handleChangeEditor = (editorValue) => {
        this.setState({ 
            editorValue,
            codeError: null,
            callStack: null,
        });
    }

    handleClickRunBtn = () => {
        this.setState({ editorActive: false });

        try {
            const editorValueES5 = getCodeES5(this.state.editorValue);

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

            stage.addListener(Iroh.PROGRAM).on("leave", (e) => {
                if (callStack.length === 0 && !issetTimeoutInterval(this.state.editorValue)) {
                    this.setState({ editorActive: true });
                }
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

    handleRadioBtnSelect = (editorValue, selectedRadio) => {
        this.setState({ 
            codeError: null,
            callStack: null,
            editorActive: true,
            editorValue,
            selectedRadio,
        });
    }

    render() {
        const { editorValue, editorActive, callStack, codeError, selectedRadio } = this.state;
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
                                readOnly={!editorActive || selectedRadio !== 0}
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
                                    /> : null
                                }
                            </CallStackArea>
                        </section>
                        <CodeExamples 
                            codes={codeExamples}
                            onChangeRadioBtn={this.handleRadioBtnSelect}
                        />
                    </div>    
                </div>
            </div>
        )
    }
}

export default ExplanationArea;