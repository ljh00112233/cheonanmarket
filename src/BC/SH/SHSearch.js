import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
    constructor(props){
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const {name, onChange} = this.props;
        if(onChange){
            onChange(name, e.target.value)
        }
    }
    componentDidMount(){
        if(this.props.autoFocus){
            this.ref.focus();
        }
    }
    setRef(ref){
        this.ref = ref;
    }
    render() {
        const {onChange, errorMessage, label, name, value, type} = this.props;
        return (
            <label>
                {label}
                <input
                    id={`input_${name}`}
                    ref={this.setRef}
                    onChange={this.handleChange}
                    value={value}
                    type={type}
                />
                {errorMessage && <span className="error">{errorMessage}</span>}
            </label>
        );
    }
}

Input.propType = {
    type: PropTypes.oneOf(["text", "number", "price", "password"]),
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
};
Input.defaultProps = {
    autoFocus: false,
    type: "text",
    onChange: ()=>{},
};

export default Input;