var Auction = React.createClass({
    getInitialState: function(){
        return {
            bids: []
        }
    },

    getHighestBid: function(){
        var highestBid = 0;
        if(this.state.bids.length === 0){
            return
        }
        this.state.bids.forEach(function(bid){
            if(bid.value > highestBid){
                highestBid = bid.value
            }
        })
        return highestBid
    },
    componentDidUpdate: function(){
        console.log("entered")
    },

    componentDidMount: function(){
    },

    newBidCreated: function(bid){
        var allBids = this.state.bids
        allBids.push(bid)
        this.setState({
            bids: allBids
        })
    },

    render: function(){
        return(
            <div>
                This is the Auction Component
                <div>You are logged in as { this.props.name }</div>
                <AuctionHeader highestBid={ this.getHighestBid() }/>
                <AuctionList bids={this.state.bids} />
                <AuctionForm 
                    createNewBid={ this.newBidCreated }
                    username={
                        this.props.name
                    }
                />
            </div>
        )
    }
});

