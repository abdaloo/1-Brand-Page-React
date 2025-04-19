const HeroSection = ()=>{
    return(
        <main className="hero container">
            <div className='hero-content'>
                <h1>Your feet deserve the best</h1>
                <p className='main-para'>Your feet deserve the best and we’re here to help you with our shoes.your feet deserve the best and we’re here to help you with our shoes.</p>
                <div className='buttons'>
                    <button className='shop-btn'>Shop Now</button>
                    <button className='category-btn'>Category</button>
                </div>
                <p className='second-para'>Also Available On</p>
                <div className="company-images">
                    <img src="images/flipkart.png" alt="Flipkart-icon" className="cursor" title="Flipkart"/>
                    <img src="images/amazon.png" alt="Amazon-icon" className="cursor" title="Amazon"/>  
                </div>
            </div>

            <div className='hero-image'>
                <div className="hero-img">
                    <img src="images/shoe_image.png" alt="Nike-Shoe" />
                </div>
            </div>
        </main> 
    )
}

export default HeroSection;