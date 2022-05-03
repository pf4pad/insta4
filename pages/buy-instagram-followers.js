import React, {useContext, useEffect, useState} from 'react';
import {Layer} from "../component/Layer/Layer";
import styles from "../styles/BuyInstagramLikes.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import styles1 from "../styles/Home.module.sass";
import Review from "../component/Review/Review";
import Comment from "../component/Comment/Comment";
import {useRouter} from "next/router";
import TextComponent from "../component/TextComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Carousel from "nuka-carousel";
import {MeContext} from "./_app";
import useAxios from "../hooks/useAxios";
import Head from "next/head";
import ModalBuy from "../component/ModalBuy/ModalBuy";

const BuyInstagramFollowers = () => {



    const axios = useAxios()
    const router = useRouter()
    const {price,setUrl} = useContext(MeContext)
    const [windowInnerWidth, setWindowInnerWidth] = useState('');
    const [comment, setComment] = useState([]);
    const [open, setOpen] = useState(false)
    const [counts, setCounts] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const [readMore,setReadMore]=useState(3)
    const getComment = async() => {
        try{
            const data = new FormData()
            data.append('system', 'Instagram')
            data.append('service', 'Followers')
            const res = await axios.post('/review_list.php', data)
            if (res.status === 200) {
                setComment(prev => res.data.data)
            }
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        if (window) setWindowInnerWidth(window?.innerWidth)
        getComment()
    }, [])
    const [buyType, setBuyType] = useState('');
    return (
        <Layer firstPage={false}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>Tagiamtop</title>
                <meta name="description" content="Buy Instagram Followers from TagIamTop at $1.30 now. Instant delivery and amazing customer support. New followers can help you to develop your business."/>
                <meta name="og:description" content="Buy Instagram Followers from TagIamTop at $1.30 now. Instant delivery and amazing customer support. New followers can help you to develop your business."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy Instagram Followers - Social Media Services Store"/>
                <meta property="title" content="Buy Instagram Followers - Social Media Services Store"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="Buy Instagram followers from Tagiamtop. Instant delivery, real followers and friendly 24/7 customer support. Try us today."/>
                <meta name="twitter:title" content="Buy Instagram Followers - Social Media Services Store"/>
                <meta property="og:url" content="https://tagiamtop.com/buy-instagram-followers"/>
                <link rel="canonical" href="https://tagiamtop.com/buy-instagram-followers"/>
            </Head>
            {
                open && <ModalBuy setOpen={setOpen} open={open} count={counts} amount={priceValue} times={'one time'} service={buyType} tarifs={price?.Followers?.plans} setService={setBuyType} setCounts={setCounts} setAmount={setPriceValue} />
            }
            <div className={styles.header_banner}>
                <p className={styles.header_title}>buy Instagram Followers <img src="/like.svg"/></p>
                <p className={styles.header_text}>At tagiamtop, you can buy Instagram likes quickly, safely and easily
                    with just a few clicks. See our deals below!</p>

                <img className={styles.header_arrow} src="/arrow-detail.svg" alt=""/>
            </div>


            <div className={styles.container}  >

                <PageTitle title={'Buy Instagram Followers'}/>


                    <p className={styles.buyLikes_title}>Our rates</p>
                    <div className={styles.buyLikes_item_container}  >
                        <Carousel
                            wrapAround={true}
                            slidesToShow={windowInnerWidth < 690 ? 1 : windowInnerWidth < 1000 ? 2 : windowInnerWidth < 1300 ? 3 : 4}>
                            {price?.Followers?.plans.map((item,index) => <BuyLikes key={index} likes={item.count} price={item.price} banner="/buylikesbanner.png" id={"FOLLO"} index={index}
                                                                             onClick={() => {
                                                                                 setPriceValue(prev => item?.price)
                                                                                 setCounts(prev => item?.count)
                                                                                 setUrl('buy-instagram-followers')
                                                                                 router.push({
                                                                                     pathname:`/step1`,
                                                                                     query:{service:"Comments",counts:item?.count,priceValue:item?.price}
                                                                                 })
                                                                                 setBuyType("Followers")
                                                                             }}
                                                                           first={true}  text="Instagram Followers"/>)}
                        </Carousel>
                    </div>


                    <p className={styles1.review_comment_title} style={{marginTop: '150px'}}>Comments about Followers </p>
                    <p className={styles1.info_text} style={{textAlign: 'center'}}> Here at tagiamptop we pride ourselves in
                        exceptional service and affordable prices. Don’t just take our word for it – check<br/> out what
                        customers say about our Instagram followers below</p>

                    <div className={`container ${styles1.review_comment_row}`}>
                        <div className={styles1.comments_container}>
                            {comment?.map((item,index) => index< readMore&& <Comment key={item.name}   name={item.name} star={item.star} text={item.text}/>)}


                            <p style={{marginTop: 20}}><a style={{color: "#8C66FA", cursor: 'pointer'}} onClick={()=>comment&&setReadMore(comment.length)}>Read More
                                Reviews</a></p>
                        </div>
                        <Review service={'Followers'}/>
                    </div>

                <div style={{height: '100px'}} />

                <div  data-aos="fade-up" data-aos-duration="1500" data-aos-offset="300"  ><TextComponent title="What’s the quality of tagiamtop followers? "
                               text={<p className={styles1.info_text} style={{lineHeight: '170%', fontSize: '16px'}} data-aos="fade-up">It's one thing to get
                                   thousands of new
                                   followers, but if they're entirely fake, you could be flagged for breaking Instagram's
                                   terms.<br/>
                                   This is the primary difference between high-quality Instagram followers and cheap or
                                   low-quality
                                   followers.<br/>
                                   Here at tagiamtop, we don’t even bother with low-quality followers. These followers have
                                   very low
                                   engagement with the platform and are often booted off Instagram after a couple of
                                   weeks.<br/>
                                   This is referred to as "drop-off." You may get a boost of followers in the short term,
                                   but they
                                   quickly fall off as the accounts are deleted.<br/>
                                   We have two tiers to choose from:<br/>
                                   <p style={{lineHeight: 2}}>High-Quality Followers — Followers with profile pictures, but
                                       no further
                                       uploads.<br/>
                                       Premium Followers — Followers with profile pictures and regularly posted
                                       content.<br/>
                                       We’ve developed a system of generating authentic followers that work to boost your
                                       following
                                       without leading to a drop-off a few weeks later. This is a common experience users
                                       report after
                                       buying cheap Instagram followers. Drop-off is still a (rare) possibility in our
                                       ecosystem. We’ll
                                       replace any drop-off followers within 30 days of your order.</p>
                               </p>} /></div>

                <div    data-aos="fade-up" data-aos-duration="1500" data-aos-offset="500"  >
                <InfoBlock
                    text={
                        <div   >

                            <p className={styles1.info_text}><img src="/buyfollowersinfo1.png" alt="buy Instagram followers" style={{float: 'left',marginRight:80,marginBottom:30}}/>
                                <p className={styles1.info_title}   >What’s the turnaround time after i place my order</p>
                                When you place an order, our system automatically begins
                                assigning you followers. In order to prevent a dramatic influx of followers that could
                                trigger Instagram's spam detection, we roll out your new followers over a couple of days.
                                The rate of dishing out new followers depends on the size of your current audience.
                                The more followers you have, the faster we can roll out your order. Most rollouts are
                                complete within 48 hours after your purchase.
                            <p className={styles1.info_title} style={{marginTop: 30}}>What information do i need to
                                provide?</p>
                            <p className={styles1.info_text}>We don’t need much — just your username.
                                We will never ask for your password or any personal or private information about your
                                account.
                                We accept the usual forms of payment, including all major credit cards and PayPal (coming
                                soon).</p></p>
                        </div>}
                    reverse={false}
                /></div>
                <div    data-aos="fade-up" data-aos-duration="1500" data-aos-offset="500"  ><TextComponent title="Why choose tagiamtop?" text={
                    <p className={styles1.info_text} style={{lineHeight: 3}}  >Tagiamtop was created by a team of social media
                        experts with over 12 years of experience on social media platforms. We’re constantly testing and
                        improving our process<br/> to stay one step ahead of the competition.<br/>
                        We're constantly running tests within the Instagram ecosystem. This allows us to find the optimal
                        follower velocity when rolling out new orders. Our system leverages real users — so you're not going
                        to run into problems with Instagram over their terms and conditions.<br/>
                        The overall impact of your new followers is going to have substantially greater results than
                        bot-driven services.<br/>
                        If that’s not enough, our 1000 satisfied monthly recurring customers says it all. </p>
                }/></div>

            </div>
        </Layer>
    );
};

export default BuyInstagramFollowers;
