import React from 'react'


class Details extends React.Component{
    render(){
        const {title} = this.props.match.params;
        console.log(title)
        return(
            <div className='detail_list'>
                <h1>title</h1>
            </div>
        );
    }
}

export default Details;