import React, { Component } from 'react';
import PropTypes from "prop-types";
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/eclipse';

class Editor extends Component {
    editor = React.createRef();

    componentDidMount() {
        const editor = this.editor.current.editor;
        editor.session.setFoldStyle("manual");
    }
    
    handleZoom(editor, type) {
        const fontSize = editor.getFontSize();
        let newFontSize;
        if (type === "in") {
            newFontSize = fontSize < 50 ? fontSize + 1 : fontSize;
        } else {
            newFontSize = fontSize > 10 ? fontSize - 1 : fontSize;
        }
        editor.setFontSize(newFontSize);
    }

    render() {
        const { value, onChange, readOnly, highlightActiveLine, className, name } = this.props;
        const editorCommands = [
            {  
                name: "zoomIn",
                bindKey: { win: "Ctrl-+", mac: "Command-+" },
                exec: editor => this.handleZoom(editor, "in"),
            },
            {
                name: "zoomOut",
                bindKey: { win: "Ctrl--", mac: "Command--" },
                exec: editor => this.handleZoom(editor, "out"),
            }
        ];

        return (
            <AceEditor 
                mode="javascript"
                theme="eclipse"
                fontSize={16}
                wrapEnabled={true}
                ref={this.editor}
                commands={editorCommands}
                editorProps={{$blockScrolling: true}}
                className={className}
                name={name}
                onChange={onChange}
                value={value}
                readOnly={readOnly}
                highlightActiveLine={highlightActiveLine}
            />
        )
    }
}

Editor.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    highlightActiveLine: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
};

Editor.defaultProps = {
    value: "",
    onChange: null,
    readOnly: false,
    highlightActiveLine: true,
    className: "",
    name: "JSeditor",
};

export default Editor;