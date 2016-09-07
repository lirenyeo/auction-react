var AuctionList = React.createClass({
    render: function(){
        return(
            <table>
                <tr>
                    <td>List of Bids</td>
                </tr>
                { 
                    this.props.bids.map(function(bid){
                        return(
                            <tr>
                                <td>
                                    { bid.value } posted by { bid.user }
                                </td>
                            </tr>
                        )
                    })
                
                } 
            </table>
        )
    }
})
