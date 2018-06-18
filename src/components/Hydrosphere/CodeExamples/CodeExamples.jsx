import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./CodeExamples.css";

class CodeExamples extends Component {
    state = {
        selectedOption: `option1`,
    }

    handleOptionChange = (event, newCode, radioBtnNumber) => {
        const { onChangeRadioBtn } = this.props;
        this.setState({
            selectedOption: event.target.value,
        });
        onChangeRadioBtn(newCode, radioBtnNumber);
    }

    render() {
        const { codes } = this.props;
        const { selectedOption } = this.state;
        return (
            <form className={styles.codesForm}>
                {
                    codes.map((item, i) => (
                        <div className={styles.radio} key={item.name}>
                            <label>
                                <input 
                                    type="radio"
                                    value={`option${i}`}
                                    checked={selectedOption === `option${i}`} 
                                    onChange={(event) => this.handleOptionChange(event, item.code, i)}
                                />
                                {item.name}
                            </label>
                        </div>
                    ))
                }
            </form>
        )
    }
}

CodeExamples.propTypes = {
    codes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onChangeRadioBtn: PropTypes.func.isRequired,
};

export default CodeExamples;