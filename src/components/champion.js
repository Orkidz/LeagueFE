import React, { Component } from 'react'
import styled from "styled-components";

export class Champion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.onClickEvent(this.props.data.key)}>
                <div>{this.props.data.name}</div>
                <div>{this.props.data.title}</div>
                <div>{this.props.data.blurb}</div>
                <div><img src={this.props.data.image} /></div>
                <div>{this.props.data.skinCount}</div>
            </div>
        )
    }
}

export default Champion
