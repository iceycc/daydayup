var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useMemo } from "react";
import styled from "styled-components";
import { color, typography } from "../shared/styles";
import { darken, rgba, opacify } from "polished";
import { easing } from "../shared/animation";
export var APPEARANCES = {
    primary: "primary",
    primaryOutline: "primaryOutline",
    secondary: "secondary",
    secondaryOutline: "secondaryOutline",
    tertiary: "tertiary",
    outline: "outline",
    inversePrimary: "inversePrimary",
    inverseSecondary: "inverseSecondary",
    inverseOutline: "inverseOutline",
};
export var SIZES = {
    small: "small",
    medium: "medium",
};
// button内部span和loading样式
var Text = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: top;\n"], ["\n  display: inline-block;\n  vertical-align: top;\n"])));
var Loading = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n"])));
export var btnPadding = {
    medium: "13px 20px",
    small: "8px 16px",
};
var StyledButton = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tborder: 0;\n\tborder-radius: 3em;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tpadding: ", ";\n\tposition: relative;\n\ttext-align: center;\n\ttext-decoration: none;\n\ttransition: all 150ms ease-out;\n\ttransform: translate3d(0,0,0);\n\tvertical-align: top;\n\twhite-space: nowrap;\n\tuser-select: none;\n\topacity: 1;\n\tmargin: 0;\n\tbackground: transparent;\n  \n  \n\tfont-size: ", "px;\n\tfont-weight: ", ";\n\tline-height: 1;\n  \n\t", "\n  \n\t", " {\n\t  transform: scale3d(1,1,1) translate3d(0,0,0);\n\t  transition: transform 700ms ", ";\n\t  opacity: 1;\n\t}\n  \n\t", " {\n\t  transform: translate3d(0, 100%, 0);\n\t}\n  \n\t", "\n  \n\t", "\n  \n\t", "\n  \n  \n  \n\t", "\n  \n\t", "\n  \n\t", "\n  \n\t", ";\n  \n\t  ", ";\n  \n\t  ", ";\n  \n\t\t", "\n  \n\t\t", "\n  \n\t\t", ";\n  \n  "], ["\n\tborder: 0;\n\tborder-radius: 3em;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tpadding: ", ";\n\tposition: relative;\n\ttext-align: center;\n\ttext-decoration: none;\n\ttransition: all 150ms ease-out;\n\ttransform: translate3d(0,0,0);\n\tvertical-align: top;\n\twhite-space: nowrap;\n\tuser-select: none;\n\topacity: 1;\n\tmargin: 0;\n\tbackground: transparent;\n  \n  \n\tfont-size: ",
    "px;\n\tfont-weight: ", ";\n\tline-height: 1;\n  \n\t",
    "\n  \n\t", " {\n\t  transform: scale3d(1,1,1) translate3d(0,0,0);\n\t  transition: transform 700ms ", ";\n\t  opacity: 1;\n\t}\n  \n\t", " {\n\t  transform: translate3d(0, 100%, 0);\n\t}\n  \n\t",
    "\n  \n\t",
    "\n  \n\t",
    "\n  \n  \n  \n\t",
    "\n  \n\t",
    "\n  \n\t",
    "\n  \n\t",
    ";\n  \n\t  ",
    ";\n  \n\t  ",
    ";\n  \n\t\t",
    "\n  \n\t\t",
    "\n  \n\t\t",
    ";\n  \n  "])), function (props) { return (props.size === SIZES.small ? "8px 16px" : "13px 20px"); }, function (props) {
    return props.size === SIZES.small ? typography.size.s1 : typography.size.s2;
}, typography.weight.extrabold, function (props) {
    return !props.isLoading &&
        "\n\t\t&:hover {\n\t\t  transform: translate3d(0, -2px, 0);\n\t\t  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;\n\t\t}\n  \n\t\t&:active {\n\t\t  transform: translate3d(0, 0, 0);\n\t\t}\n  \n\t\t&:focus {\n\t\t  box-shadow: " + rgba(color.primary, 0.4) + " 0 1px 9px 2px;\n\t\t}\n  \n\t\t&:focus:hover {\n\t\t  box-shadow: " + rgba(color.primary, 0.2) + " 0 8px 18px 0px;\n\t\t}\n\t  ";
}, Text, easing.rubber, Loading, function (props) {
    return props.disabled &&
        "\n\t\tcursor: not-allowed !important;\n\t\topacity: 0.5;\n\t\t&:hover {\n\t\t  transform: none;\n\t\t}\n\t  ";
}, function (props) {
    return props.isUnclickable &&
        "\n\t\tcursor: default !important;\n\t\tpointer-events: none;\n\t\t&:hover {\n\t\t  transform: none;\n\t\t}\n\t  ";
}, function (props) {
    return props.isLoading &&
        "\n\t\tcursor: progress !important;\n\t\topacity: 0.7;\n  \n\t\t" + Loading + " {\n\t\t  transition: transform 700ms " + easing.rubber + ";\n\t\t  transform: translate3d(0, -50%, 0);\n\t\t  opacity: 1;\n\t\t}\n  \n\t\t" + Text + " {\n\t\t  transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);\n\t\t  opacity: 0;\n\t\t}\n  \n\t\t&:hover {\n\t\t  transform: none;\n\t\t}\n\t  ";
}, function (props) {
    return props.appearance === APPEARANCES.primary &&
        "\n\t\tbackground: " + color.primary + ";\n\t\tcolor: " + color.lightest + ";\n  \n\t\t" + (!props.isLoading &&
            "\n\t\t\t&:hover {\n\t\t\t  background: " + darken(0.05, color.primary) + ";\n\t\t\t}\n\t\t\t&:active {\n\t\t\t  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t  box-shadow: " + rgba(color.primary, 0.4) + " 0 1px 9px 2px;\n\t\t\t}\n\t\t\t&:focus:hover {\n\t\t\t  box-shadow: " + rgba(color.primary, 0.2) + " 0 8px 18px 0px;\n\t\t\t}\n\t\t  ") + "\n\t  ";
}, function (props) {
    return props.appearance === APPEARANCES.secondary &&
        "\n\t\tbackground: " + color.secondary + ";\n\t\tcolor: " + color.lightest + ";\n  \n\t\t" + (!props.isLoading &&
            "\n\t\t\t&:hover {\n\t\t\t  background: " + darken(0.05, color.secondary) + ";\n\t\t\t}\n\t\t\t&:active {\n\t\t\t  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t  box-shadow: " + rgba(color.secondary, 0.4) + " 0 1px 9px 2px;\n\t\t\t}\n\t\t\t&:focus:hover {\n\t\t\t  box-shadow: " + rgba(color.secondary, 0.2) + " 0 8px 18px 0px;\n\t\t\t}\n\t\t  ") + "\n\t  ";
}, function (props) {
    return props.appearance === APPEARANCES.tertiary &&
        "\n\t\tbackground: " + color.tertiary + ";\n\t\tcolor: " + color.darkest + ";\n  \n\t\t" + (!props.isLoading &&
            "\n\t\t\t&:hover {\n\t\t\t  background: " + darken(0.05, color.tertiary) + ";\n\t\t\t}\n\t\t\t&:active {\n\t\t\t  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t  box-shadow: " + rgba(color.darkest, 0.15) + " 0 1px 9px 2px;\n\t\t\t}\n\t\t\t&:focus:hover {\n\t\t\t  box-shadow: " + rgba(color.darkest, 0.05) + " 0 8px 18px 0px;\n\t\t\t}\n\t\t  ") + "\n\t  ";
}, function (props) {
    return props.appearance === APPEARANCES.outline &&
        "\n\t\tbox-shadow: " + opacify(0.05, color.border) + " 0 0 0 1px inset;\n\t\tcolor: " + color.dark + ";\n\t\tbackground: transparent;\n  \n\t\t" + (!props.isLoading &&
            "\n\t\t\t&:hover {\n\t\t\t  box-shadow: " + opacify(0.3, color.border) + " 0 0 0 1px inset;\n\t\t\t}\n  \n\t\t\t&:active {\n\t\t\t  background: " + opacify(0.05, color.border) + ";\n\t\t\t  box-shadow: transparent 0 0 0 1px inset;\n\t\t\t  color: " + color.darkest + ";\n\t\t\t}\n  \n\t\t\t&:active:focus:hover {\n\t\t\t  " + 
            /* This prevents the semi-transparent border from appearing atop the background */ "" + "\n\t\t\t  background: " + opacify(0.05, color.border) + ";\n\t\t\t  box-shadow:  " + rgba(color.darkest, 0.15) + " 0 1px 9px 2px;\n\t\t\t}\n  \n\t\t\t&:focus {\n\t\t\t  box-shadow: " + opacify(0.05, color.border) + " 0 0 0 1px inset, \n\t\t\t  " + rgba(color.darkest, 0.15) + " 0 1px 9px 2px;\n\t\t\t}\n\t\t\t&:focus:hover {\n\t\t\t  box-shadow: " + opacify(0.05, color.border) + " 0 0 0 1px inset, \n\t\t\t  " + rgba(color.darkest, 0.05) + " 0 8px 18px 0px;\n\t\t\t}\n\t\t  ") + ";\n\t  ";
}, function (props) {
    return props.appearance === APPEARANCES.primaryOutline &&
        "\n\t\t  box-shadow: " + color.primary + " 0 0 0 1px inset;\n\t\t  color: " + color.primary + ";\n  \n\t\t  &:hover {\n\t\t\tbox-shadow: " + color.primary + " 0 0 0 1px inset;\n\t\t\tbackground: transparent;\n\t\t  }\n  \n\t\t  &:active {\n\t\t\tbackground: " + color.primary + ";\n\t\t\tbox-shadow: " + color.primary + " 0 0 0 1px inset;\n\t\t\tcolor: " + color.lightest + ";\n\t\t  }\n\t\t  &:focus {\n\t\t\tbox-shadow: " + color.primary + " 0 0 0 1px inset, " + rgba(color.primary, 0.4) + " 0 1px 9px 2px;\n\t\t  }\n\t\t  &:focus:hover {\n\t\t\tbox-shadow: " + color.primary + " 0 0 0 1px inset, " + rgba(color.primary, 0.2) + " 0 8px 18px 0px;\n\t\t  }\n\t\t";
}, function (props) {
    return props.appearance === APPEARANCES.secondaryOutline &&
        "\n\t\t  box-shadow: " + color.secondary + " 0 0 0 1px inset;\n\t\t  color: " + color.secondary + ";\n  \n\t\t  &:hover {\n\t\t\tbox-shadow: " + color.secondary + " 0 0 0 1px inset;\n\t\t\tbackground: transparent;\n\t\t  }\n  \n\t\t  &:active {\n\t\t\tbackground: " + color.secondary + ";\n\t\t\tbox-shadow: " + color.secondary + " 0 0 0 1px inset;\n\t\t\tcolor: " + color.lightest + ";\n\t\t  }\n\t\t  &:focus {\n\t\t\tbox-shadow: " + color.secondary + " 0 0 0 1px inset,\n\t\t\t  " + rgba(color.secondary, 0.4) + " 0 1px 9px 2px;\n\t\t  }\n\t\t  &:focus:hover {\n\t\t\tbox-shadow: " + color.secondary + " 0 0 0 1px inset,\n\t\t\t  " + rgba(color.secondary, 0.2) + " 0 8px 18px 0px;\n\t\t  }\n\t\t";
}, function (props) {
    return props.appearance === APPEARANCES.inversePrimary &&
        "\n\t\t\tbackground: " + color.lightest + ";\n\t\t\tcolor: " + color.primary + ";\n  \n\t\t\t" + (!props.isLoading &&
            "\n\t\t\t\t&:hover {\n\t\t\t\t  background: " + color.lightest + ";\n\t\t\t\t}\n\t\t\t\t&:active {\n\t\t\t\t  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n\t\t\t\t}\n\t\t\t\t&:focus {\n\t\t\t\t  box-shadow: " + rgba(color.primary, 0.4) + " 0 1px 9px 2px;\n\t\t\t\t}\n\t\t\t\t&:focus:hover {\n\t\t\t\t  box-shadow: " + rgba(color.primary, 0.2) + " 0 8px 18px 0px;\n\t\t\t\t}\n\t\t\t") + "\n\t\t";
}, function (props) {
    return props.appearance === APPEARANCES.inverseSecondary &&
        "\n\t\t\tbackground: " + color.lightest + ";\n\t\t\tcolor: " + color.secondary + ";\n  \n\t\t\t" + (!props.isLoading &&
            "\n\t\t\t\t&:hover {\n\t\t\t\t  background: " + color.lightest + ";\n\t\t\t\t}\n\t\t\t\t&:active {\n\t\t\t\t  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n\t\t\t\t}\n\t\t\t\t&:focus {\n\t\t\t\t  box-shadow: " + rgba(color.secondary, 0.4) + " 0 1px 9px 2px;\n\t\t\t\t}\n\t\t\t\t&:focus:hover {\n\t\t\t\t  box-shadow: " + rgba(color.secondary, 0.2) + " 0 8px 18px 0px;\n\t\t\t\t}\n\t\t\t") + "\n\t\t";
}, function (props) {
    return props.appearance === APPEARANCES.inverseOutline &&
        "\n\t\t\tbox-shadow: " + color.lightest + " 0 0 0 1px inset;\n\t\t\tcolor: " + color.lightest + ";\n  \n\t\t\t&:hover {\n\t\t\t  box-shadow: " + color.lightest + " 0 0 0 1px inset;\n\t\t\t  background: transparent;\n\t\t\t}\n  \n\t\t\t&:active {\n\t\t\t  background: " + color.lightest + ";\n\t\t\t  box-shadow: " + color.lightest + " 0 0 0 1px inset;\n\t\t\t  color: " + color.darkest + ";\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t  box-shadow: " + color.lightest + " 0 0 0 1px inset,\n\t\t\t\t" + rgba(color.darkest, 0.4) + " 0 1px 9px 2px;\n\t\t\t}\n\t\t\t&:focus:hover {\n\t\t\t  box-shadow: " + color.lightest + " 0 0 0 1px inset,\n\t\t\t\t" + rgba(color.darkest, 0.2) + " 0 8px 18px 0px;\n\t\t\t}\n\t\t";
});
function Button(props) {
    var isLoading = props.isLoading, loadingText = props.loadingText, isLink = props.isLink, children = props.children;
    var buttonInner = (React.createElement(React.Fragment, null,
        React.createElement(Text, null, children),
        isLoading && React.createElement(Loading, null, loadingText || "Loading...")));
    var btnType = useMemo(function () {
        if (isLink) {
            return "a";
        }
    }, [isLink]);
    return (React.createElement(StyledButton, __assign({ as: btnType }, props), buttonInner));
}
Button.defaultProps = {
    isLoading: false,
    loadingText: null,
    isLink: false,
    appearance: APPEARANCES.tertiary,
    isDisabled: false,
    isUnclickable: false,
    containsIcon: false,
    // size: SIZES.medium,
    ButtonWrapper: undefined,
};
export default Button;
var templateObject_1, templateObject_2, templateObject_3;
