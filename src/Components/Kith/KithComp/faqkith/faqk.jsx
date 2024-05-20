import React, { Component } from 'react';
import KithNavbar from "../../../Navbar/KithNavbar/index";
import KithInfoSubNavbar from "../../../Navbar/KithInfoSubNavbar";
import KithFooter from "../../../KithFooter/index";
import './faqk.css';
class faqk extends Component {
    render() {
        return (
            <div>
                <KithNavbar/>
                <KithInfoSubNavbar/>
                <section className='faq-kith'>                                  
                <div className='faq-head'>Frequently Ask Question </div>
                
                    <div className='faqk-qna'>
                        <div className='faq-q'>1. What is Lokarpan?</div>
                        <ul className='faqk-a'>
                            <li>Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities
</li>
                           
                        </ul>
                    </div>
                    <div className='faqk-qna'>
                        <div  className='faq-q'>2. How can i involved with Lokarpan ?</div>
                        <ul className='faqk-a'>
                            <li>Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities
</li>
                           
                        </ul>
                    </div>
                    <div className='faqk-qna'>
                        <div  className='faq-q'>3.  Are there any employment opportunities at Lokarpan ?
</div>
                        <ul className='faqk-a'>
                            <li>Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities
</li>
                            
                        </ul>
                    </div>
                    <div className='faqk-qna'>
                        <div  className='faq-q'>4. How can I support Lokarpan mission Financially ?
</div>
                        <ul className='faqk-a'>
                            <li> Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities
</li>
                           
                        </ul>
                    </div>
                    <div className='faqk-qna'>
                        <div  className='faq-q'>5.  Is Lokarpan open to collaboration with other Organization?</div>
                        <ul className='faqk-a'>
                            <li> Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities
</li>
                                </ul>
                    </div>
                    <div className='faqk-qna'>
                        <div  className='faq-q'>6.  How can i stay updated on Lokarpan’s activities and events?
</div>
                        <ul className='faqk-a'>
                            <li> Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities
</li>
                            
                        </ul>
                    </div>
                    <div  className='faqk-qna'>
                        <div  className='faq-q'>7. Is Lokarpan only online, or does it have a physical presence?
</div>
                        <ul className='faqk-a'>
                            <li>Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities
</li>
                               </ul>
                    </div>
                    </section>

                <KithFooter/>
            </div>
        );
    }
}

export default faqk;