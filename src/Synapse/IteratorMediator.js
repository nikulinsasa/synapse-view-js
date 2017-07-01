import React, { Component } from 'react';
import Sequence from './Sequence'

export default class IteratorMediator extends Component {

    render() {
        var value = this.props.value;
        var sequence = value.querySelector("target > sequence");
        var _key = this.props.key+"_iterator";
        return (
            <div className="mediator mediator-iterator">
                <div className="mediator-icon">
                    <img src={"/icons/iterator.svg"} alt="iterator" />
                    <div className="mediator-label">iterator</div>
                </div>
                <div>
                    <div>{value.attributes.expression.value}</div>
                    <div>
                        <Sequence key={_key} index={_key} name='sequence' type="iterator" sequences={sequence.children} />
                    </div>
                </div>
            </div>
        );
    }
}
