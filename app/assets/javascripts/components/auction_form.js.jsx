var AuctionForm = React.createClass({
    getInitialState: function(){
        return {
            bidValue: 0
        }
    },

    handleClick: function(e){
        e.preventDefault()
        var bid = {
            value: parseInt(this.state.bidValue), 
            user: this.props.username 
        }
        this.props.createNewBid(bid)
    },

    handleChange: function(e){
        this.setState({bidValue: e.target.value})
    },

    componentWillUpdate: function(){
        console.log("previous bidValue: " + this.state.bidValue) 
    },

    componentDidUpdate: function(){
        console.log("current bidValue: " + this.state.bidValue) 
    },
    
    render: function(){
        return(
            <form>
                <input
                    value={ this.state.bidValue }
                    onChange={ this.handleChange }
                    type="text" />
                <input 
                    type="submit" 
                    value="Place Bid"
                    onClick={ this.handleClick }
                />
            </form>
        )

    }
})
