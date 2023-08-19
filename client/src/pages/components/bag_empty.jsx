import "../../css/bag.css"

const Bag_empty = () =>{
    return(
        <>
        {/* <!-- when bag is empty --> */}
        <div className="bag-empty">
            <div className="empty-modelus">
                <div className="empty-title">
                    <h1>Your bag is empty.</h1>
                    <p>Sign in to see if you have any saved items. Or continue shopping.</p>
                    <div className="row">
                        <div className="form-btn">
                            <div className="btn-empty sign-in">
                                <a href="/sign-in">Sign In</a>
                            </div>
                        </div>
                        <div className="form-btn">
                            <div className="btn-empty store">
                                <a href="/store">Continue Shopping</a>
                            </div>
                        </div>
                    </div>                
                </div>

                <div className="aidcaption">
                    <div className="aidcaption-modelus">
                        Need some help? Call 1‑800‑MY‑APPLE.
                    </div>
                </div>

                <div className="shop">
                    <div className="shop-modelus">
                        <div className="shop-icon">
                            <div className="shop-text">
                                <div className="shop-title">
                                    <h2>New Arrivals</h2>
                                </div>
                                <div className="shop-content">
                                    Check out the latest accessories.
                                </div>
                                <div className="shop-store-url">
                                    <a href="/Store"><span>Shop</span></a>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Bag_empty