import React from 'react'
import NewsImage from '../../../assets/images/player.webp'
export default function NewsBlog() {
    return (
        <>
            <div className='home_news_section'>
                <h4>News / Blog</h4>
                <div className='newsDiv'>
                    <div>NEW ZEALAND TOUR OF ENGLAND, 2022</div>
                    <div className='NewsImageDiv'>
                        <img src={NewsImage} alt="" className='img-fluid w-100' />
                    </div>
                    <h3>ENG favourites, start delayed by rain</h3>
                    <p>Pope and Root added 132 runs off just 163 balls in the run chase</p>
                    <div className='newsMatch_details'>
                        <div className='team'>
                            <div>INDW</div>
                            <div>138-5(20)</div>
                        </div>
                        <div className='opponent_team'>
                            <div>SLW</div>
                            <div>95-2(11.4)</div>
                        </div>
                        <div className='matchStatus'>Sri Lanka Women need 44 runs in 49 ball to win the match.</div>
                    </div>
                    <div className='newsDiv_redirect'>
                        <a href="/"> <b> Day 5 </b>/ Live Blog</a>
                    </div>
                    <div className='newsDiv_redirect'>
                        <a href="/">NZ pin hope on "deteriorating pitch" to avert whitewash</a>
                    </div>
                    <div className='newsDiv_redirect'>
                        <a href="/"> <b> STATS </b>/ Records tumble as Mitchell, Blundell defy England again</a>
                    </div>
                </div>
                <div className='newsDiv'>
                    <div>NEW ZEALAND TOUR OF ENGLAND, 2022</div>
                    <div className='NewsImageDiv'>
                        <img src={NewsImage} alt="" className='img-fluid w-100' />
                    </div>
                    <h3>ENG favourites, start delayed by rain</h3>
                    <p>Pope and Root added 132 runs off just 163 balls in the run chase</p>
                    <div className='newsMatch_details'>
                        <div className='team'>
                            <div>INDW</div>
                            <div>138-5(20)</div>
                        </div>
                        <div className='opponent_team'>
                            <div>SLW</div>
                            <div>95-2(11.4)</div>
                        </div>
                        <div className='matchStatus'>Sri Lanka Women need 44 runs in 49 ball to win the match.</div>
                    </div>
                    <div className='newsDiv_redirect'>
                        <a href="/"> <b> Day 5 </b>/ Live Blog</a>
                    </div>
                    <div className='newsDiv_redirect'>
                        <a href="/">NZ pin hope on "deteriorating pitch" to avert whitewash</a>
                    </div>
                    <div className='newsDiv_redirect'>
                        <a href="/"> <b> STATS </b>/ Records tumble as Mitchell, Blundell defy England again</a>
                    </div>
                </div>
            </div>
        </>
    )
}
