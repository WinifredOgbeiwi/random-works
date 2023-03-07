import React from 'react'
import { TwitterShareButton } from 'react-share';
function Tweet() {
    return (
        <div>
            <h1>HELLO PEOPLE</h1>
            <a className="twitter-share-button"
                href="https://twitter.com/intent/tweet">
                Tweet</a>

            <h1>Pre-populate Tweet text </h1>
            <a class="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=Hello%20world i am winifred" target='_blank'>
                Tweet</a>


            <h1> Customize Tweet button parameters using data-* attributes.</h1>
            <a
                href="https://twitter.com/intent/tweet?text=Hello%20world"
                data-size="large" target='_blank'>
                Tweet</a>

            <div className="centerContent">
                <div className="selfCenter spaceBetween">
                    <TwitterShareButton
                        onLoad={function noRefCheck() { }}
                        options={{
                            text: '#reactjs is awesome',
                            via: 'saurabhnemade'
                        }}
                        url="https://facebook.com/saurabhnemade"
                    />
                </div>
                <TwitterShareButton 
                url={'https://www.example.com'}
                    options={{
                        text: '#reactjs is awesome',
                        via: 'saurabhnemade'
                    }}
                    quote={'Dummy text!'}
                    hashtag="#muo">
CLCIK MEE
                </TwitterShareButton>



                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                
            </div>
        </div>
    )
}

export default Tweet