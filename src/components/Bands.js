import React from 'react'
import Band from './Band'

export default class Bands extends React.Component {
    render(){
        return(
            <div>
                {this.props.bands.map((b) => <Band key={b.id} band={b} delete={this.props.delete}/>)}
            </div>
        )
    }
}