import React from 'react'

class ItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            water_price: '',
            elec_price: '',
        }
    }
    render() {
        return (
            <div className='item_class'>
                <p>
                    ItemPage
                </p>
            </div>
        );
    }
}


export default ItemPage