import { a as __assign, N as css, W as __makeTemplateObject, _ as __rest } from '../../useThemeProps-ebbcf03e.js';
import { a as jsx } from '../../emotion-react-jsx-runtime.esm-7152dcf4.js';
import { useState } from 'react';
import { c as createBox } from '../../createBox-4356b238.js';
import { P as Paper } from '../../Paper-c7c4b5f6.js';
import 'react-is';
import 'react/jsx-runtime';
import '../../styled-e7ad2f0c.js';
import '../../useTheme-683cb905.js';
import '../../chainPropTypes-6eba90ab.js';

const Box = createBox();
var Box$1 = Box;

// keyCode constants
var BACKSPACE = 8;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var DELETE = 46;
var SPACEBAR = 32;
function getBorderColor(state) {
    if (state.hasError)
        return '1px #DF2113';
    if (state.isComplete)
        return '1px rgb(42, 208, 98)';
    if (state.isActive)
        return '1px #117B74CC';
    return '1px #DCDEE5';
}
var Otp = function (_a) {
    var _b = _a.codeLength, codeLength = _b === void 0 ? 6 : _b, dataTestId = _a.dataTestId, onChange = _a.onChange, isComplete = _a.isComplete, isDisabled = _a.isDisabled, isLoading = _a.isLoading, hasError = _a.hasError, value = _a.value;
    // used to determine which input should have focus
    var _c = useState(0), focusedField = _c[0], setFocusedField = _c[1];
    var isActive = focusedField >= 0;
    // takes value passed in as prop and returns it into an array
    var getOtpValue = function () { return (value ? value.toString().split('') : []); };
    // converts otp array into string and sends value back to onChange prop event
    var handleOtpChange = function (otp) {
        var otpValue = otp.join('');
        onChange(otpValue);
    };
    // updates otp array with next value then sends to helper func
    var changeCodeAtFocus = function (value) {
        var otp = getOtpValue();
        otp[focusedField] = value[0];
        handleOtpChange(otp);
    };
    var focusNextInput = function () { return setFocusedField(focusedField + 1); };
    var focusPrevInput = function () {
        // prevents focusField getting set to negative number when first field is focused and users hits backspace or delete
        if (focusedField)
            setFocusedField(focusedField - 1);
    };
    // Handle cases of backspace, delete, left arrow, right arrow, space
    var handleOnKeyDown = function (e) {
        if (e.keyCode === BACKSPACE || e.key === 'Backspace') {
            e.preventDefault();
            changeCodeAtFocus('');
            focusPrevInput();
        }
        else if (e.keyCode === DELETE || e.key === 'Delete') {
            e.preventDefault();
            changeCodeAtFocus('');
        }
        else if (e.keyCode === LEFT_ARROW || e.key === 'ArrowLeft') {
            e.preventDefault();
            focusPrevInput();
        }
        else if (e.keyCode === RIGHT_ARROW || e.key === 'ArrowRight') {
            e.preventDefault();
            focusNextInput();
        }
        else if (e.keyCode === SPACEBAR || e.key === ' ' || e.key === 'Spacebar' || e.key === 'Space') {
            e.preventDefault();
        }
    };
    // Focus on input by index used by onPaste func to set the next active input to the following input
    var focusInput = function (input) {
        var activeInput = Math.max(Math.min(codeLength - 1, input), 0);
        setFocusedField(activeInput);
    };
    var handleOnPaste = function (e) {
        e.preventDefault();
        if (isDisabled)
            return;
        var otp = getOtpValue();
        var nextActiveInput = focusedField;
        var pastedData = e.clipboardData
            .getData('text/plain')
            .slice(0, codeLength - focusedField)
            .split('');
        // Paste data from focused input onwards
        for (var pos = 0; pos < codeLength; ++pos) {
            if (pos >= focusedField && pastedData.length > 0) {
                otp[pos] = pastedData.shift();
                nextActiveInput++;
            }
        }
        setFocusedField(nextActiveInput);
        focusInput(nextActiveInput);
        handleOtpChange(otp);
    };
    // renders an array of individual input fields with value as the index of the otp value
    var renderInputs = function () {
        var inputs = [];
        var otp = getOtpValue();
        var _loop_1 = function (i) {
            inputs.push(jsx(SingleOtpInput, { disabled: isDisabled, index: i, value: otp && otp[i], 
                // only focus on current active focus field
                shouldFocus: focusedField === i, onChange: function (e) { return changeCodeAtFocus(e.target.value); }, onKeyDown: handleOnKeyDown, onInput: function () {
                    // prevents focusField getting set to a number higher than code length when user is on last input 
                    if (focusedField < codeLength - 1)
                        focusNextInput();
                }, 
                // when user clicks out of box reset focus field 
                onBlur: function () { return setFocusedField(-1); }, 
                // sets the focus field to current index
                onFocus: function (e) {
                    setFocusedField(i);
                    e.target.select();
                }, onPaste: handleOnPaste }, i));
        };
        for (var i = 0; i < codeLength; i++) {
            _loop_1(i);
        }
        return inputs;
    };
    return (jsx(Paper, __assign({ css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: flex;\n      justify-content: center;\n      height: 100%;\n      border-radius: 8px !important;\n      border: solid ", ";\n      outline: ", ";\n      &:hover {\n        background-color: #F1F2F5;\n        input {\n          background-color: #F1F2F5;\n        };\n      }\n      input {\n        width: 100%;\n        text-align: center;\n        border: none;\n        color: ", ";\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 25px;\n        &:focus {\n          outline: none !important;\n          border: none;\n        }\n        &::placeholder {\n          font-size: 25px;\n          color: ", ";\n        }\n      }\n    "], ["\n      display: flex;\n      justify-content: center;\n      height: 100%;\n      border-radius: 8px !important;\n      border: solid ", ";\n      outline: ", ";\n      &:hover {\n        background-color: #F1F2F5;\n        input {\n          background-color: #F1F2F5;\n        };\n      }\n      input {\n        width: 100%;\n        text-align: center;\n        border: none;\n        color: ", ";\n        font-weight: 500;\n        font-size: 20px;\n        line-height: 25px;\n        &:focus {\n          outline: none !important;\n          border: none;\n        }\n        &::placeholder {\n          font-size: 25px;\n          color: ", ";\n        }\n      }\n    "])), getBorderColor({ hasError: hasError, isComplete: isComplete, isActive: isActive }), isComplete && '3px solid rgba(42, 208, 98, 0.3)', isLoading ? '#9e9e9e' : '#121317ff', isActive ? '#121317ff' : '#9e9e9e'), onClick: function () {
            setFocusedField(0);
        }, "data-testid": dataTestId }, { children: jsx(Box$1, __assign({ display: 'flex', alignItems: 'center', justifyItems: 'center', width: 1 / 2 }, { children: renderInputs() })) })));
};
var SingleOtpInput = function (_a) {
    var index = _a.index, shouldFocus = _a.shouldFocus, value = _a.value, props = __rest(_a, ["index", "shouldFocus", "value"]);
    return (jsx("input", __assign({ maxLength: 1, ref: function (node) {
            if (node !== null) {
                // after user inputs a value for input, shouldFocus updates and the next input should become active
                if (shouldFocus) {
                    node.focus();
                }
            }
        }, name: 'otp-field-' + index, "aria-label": 'otp-field-' + index, 
        // this prevents onClick handler form OTP component firing when user clicks on individual field
        onClick: function (e) { return e.stopPropagation(); }, placeholder: shouldFocus ? undefined : '―', value: value ? value : '', inputMode: 'numeric', pattern: "[0-9]*" }, props)));
};
var templateObject_1;

export { Otp as default };
//# sourceMappingURL=index.js.map
