/* eslint-disable react/display-name */
import React,{Component} from "react";

export default function Hoc(HocComp){
    return class extends Component {
        render() {
            return (
                <div>
                    <HocComp></HocComp>
                </div>
            )
        }
    }
}