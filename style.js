import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "description": {
        "fontSize": 20,
        "maxWidth": 500
    },
    "td": {
        "width": 150
    },
    "body": {
        "backgroundColor": "#1FDA9A",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "inner": {
        "maxWidth": 500
    },
    "table--head": {
        "fontWeight": "600"
    }
});