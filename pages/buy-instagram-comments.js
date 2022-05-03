import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/BuyInstagramLikes.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import styles1 from "../styles/Home.module.sass";
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {Layer} from "../component/Layer/Layer";
import {useRouter} from "next/router";
import TextComponent from "../component/TextComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Carousel from "nuka-carousel";
import {MeContext} from "./_app";
import useAxios from "../hooks/useAxios";
import Head from "next/head";
import ModalBuy from "../component/ModalBuy/ModalBuy";

const BuyInstagramComments = () => {

    const router = useRouter()
    const {price,setUrl} = useContext(MeContext)
    const axios = useAxios()

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
            data.append('service', 'Comments')
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
                <meta name="description" content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy Instagram Comments - Social Media Services Store"/>
                <meta property="title" content="Buy Instagram Comments - Social Media Services Store"/>
                <meta name="og:description" content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."/>
                <meta name="twitter:title" content="Buy Instagram Comments - Social Media Services Store"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:url" content="https://tagiamtop.com/buy-instagram-comments"/>
                <link rel="canonical" href="https://tagiamtop.com/buy-instagram-comments"/>
            </Head>
            {
                open && <ModalBuy setOpen={setOpen} open={open} count={counts} amount={priceValue} times={'one time'} service={buyType} tarifs={price?.Comments?.plans} setService={setBuyType} setCounts={setCounts} setAmount={setPriceValue} />
            }
            <div className={styles.header_banner}>
                <p className={styles.header_title}>Comments <img src="/like.svg"/></p>
                <p className={styles.header_text}>At tagiamtop, you can buy Instagram likes quickly, safely and easily
                    with just a few clicks. See our deals below!</p>

                <img className={styles.header_arrow} src="/Arrow-detail.svg" alt=""/>
            </div>

            <div className={styles.container}>

                <PageTitle title={'Comments'}/>

                <div>
                    <p className={styles.buyLikes_title}>Our rates</p>
                    <div className={styles.buyLikes_item_container}>
                        <Carousel
                            wrapAround={true}
                            slidesToShow={windowInnerWidth < 690 ? 1 : windowInnerWidth < 1000 ? 2 : windowInnerWidth < 1300 ? 3 : 4}>
                            {price?.Comments?.plans.map((item,index) => <BuyLikes key={index} likes={item.count} price={item.price} banner="/buylikesbanner.png" index={index}
                                                                            onClick={() => {
                                                                                setPriceValue(prev => item?.price)
                                                                                setCounts(prev => item?.count)
                                                                                setUrl('buy-instagram-comments')
                                                                                router.push({
                                                                                    pathname:`/step1`,
                                                                                    query:{service:"Comments",counts:item?.count,priceValue:item?.price}
                                                                                })
                                                                                setBuyType("Comments")
                                                                            }} text="Instagram Comments" id={"COMM"}
                            />)}
                        </Carousel>
                    </div>
                </div>
                <div >
                    <p className={styles1.review_comment_title}>Comments about Comments</p>
                    <p className={styles1.info_text} style={{textAlign: 'center'}}> Here at Buzzoid we pride ourselves in
                        exceptional service and affordable prices. Don’t just take our word for it – check out what
                        customers say about our Instagram followers below</p>

                    <div className={`container ${styles1.review_comment_row}`}>
                        <div className={styles1.comments_container}>
                            {comment?.map((item,index) => index< readMore&& <Comment key={item.name}   name={item.name} star={item.star} text={item.text}/>)}

                            <p style={{marginTop: 20}}><a style={{color: "#8C66FA", cursor: 'pointer'}} onClick={()=>comment&&setReadMore(comment.length)}>Read More
                                Reviews</a></p>
                        </div>
                        <Review service={'Comments'}/>
                    </div>
                </div>
                <div    data-aos="fade-up" data-aos-duration="2000" data-aos-offset="400"   >
                <InfoBlock
                    text={
                        <p style={ {marginBottom:30,padding:20}}  >
                            <img src="/commentsinfo1.png" alt="buy Instagram comments" style={{float: 'left',marginRight:80,marginBottom:30}}/>
                            <p className={styles1.info_title}>Buy Instagram Comments</p>
                            <p className={styles1.info_text}>What’s not to love?
                                Instagram is THE social media app. It allows its millions of global users to:
                                <li>hare their aesthetically pleasing photos,</li>
                                <li>post videos of their interesting busy lives,</li>
                                <li>filter photos with built-in professional-looking Instagram filters,</li>
                                <li>tweak application settings to suit their individual needs,</li>
                                <li>socialize with the friends they already have and ultimately and make millions of new
                                    online ones worldwide!
                                </li>
                            </p>
                            <p className={styles1.info_title}  >Wow! Why would you want to buy
                                Instagram comments?</p>
                            <p className={styles1.info_text}>
                                <p>It’s no wonder why everybody wants to buy Instagram comments.<br/>
                                    It would ridiculous not to want to!</p> <p> Comments for Instagram have a great effect -
                                it
                                raises brand and Instagram page recognition efficiently and fast, boosts your profits in the
                                long run, creates social media engagement and ultimately makes you and your brand famous.
                                Not to mention, you get immense satisfaction because of a well-done job – so it covers all
                                the reasons why you were on Instagram in the first place.
                                More importantly, having more comments rockets your page to Instagram stardom – something
                                that Poprey has perfected as a service of buying Instagram comments!</p>
                            </p>
                        </p>}
                    reverse={false} fade={true}
                      />
                </div>
                <div    data-aos="fade-up" data-aos-duration="2000" data-aos-offset="500"  >
                <InfoBlock
                    text={
                        <p style={{ marginBottom:30,padding:20}}  >

                            <p className={styles1.info_text}>
                                <img src="/commentsinfo2.png" alt="buy real Instagram comments" style={{float: 'right',marginLeft:80,marginBottom:30}}/>
                                <p className={styles1.info_title}>Feeling overwhelmed? Don’t be!</p>
                                And if you are feeling a bit overwhelmed by all of it, like some of us might be, there is no
                                reason to worry!
                                Poprey has come to your rescue, my dear!
                                In today’s modern world, we might not have unlimited time. We might not have the
                                never-ending creative and innovative flow of new ideas that we need.
                                We might not have the expert knowledge to achieve the results we want and obtain as many
                                comments to our posts on Instagram as we dream of.
                            </p>
                            <p className={styles1.info_title} style={{marginTop: 30}}>Right? Let’s face it.</p>
                            <p className={styles1.info_text}>
                                Getting people to comment on your page is hard work – why not make it automatic? Time is
                                money and, ultimately, it is a luxury in very short supply. Our team at Poprey fully
                                understands that.
                                Sure, you could go and attend numerous social media marketing courses created by Instagram
                                gurus to give have the necessary tools and knowledge to understand how the new Instagram
                                algorithm works. But in fact, this overcomplicated scenario is actually why you are here
                                —not
                                to spend more time and money that you might not have. You are here to buy Instagram comments
                                and in the end, it all boils down to complete ease and simplicity.
                            </p>
                        </p>}
                    reverse={true}
                     />
                </div>
                <div    data-aos="fade-up" data-aos-duration="2000" data-aos-offset="500"  >
                <TextComponent title={<p className={styles1.info_title}>Get some Instagram love</p>}
                               text={

                                       <p className={styles1.info_text} style={{lineHeight: 3, marginBottom: 20}}  >That’s
                                           where Poprey comes in!
                                           With our extensive network of valuable services, we make sure your online posts
                                           receive numerous
                                           interesting and relevant comments, merely at the touch of a single button. It
                                           doesn’t matter where
                                           you are to buy Instagram comments – US, UK, or a remote island (with cell service
                                           of course). It
                                           really couldn’t be simpler.</p>}/>
                </div>
                <div    data-aos="fade-up" data-aos-duration="2000" data-aos-offset="600"  > <TextComponent
                                           title={<p className={styles1.info_title}>No hassle! No stress! Just lots of
                                               comments from Instagram!</p>}
                                           text={
                                               <p className={styles1.info_text}   style={{lineHeight: 3}}>The process of
                                                   buying Instagram comments is
                                                   very simple.
                                                   Firstly, take a look at our value-packed packages and deals and choose
                                                   the one that fits your pocket
                                                   and your goals. You have an option to buy random as well as custom
                                                   Instagram comments – just pick
                                                   one on the pop-up window.
                                                   Then, confirm payment via our secure, encrypted payment gateway and we’ll
                                                   take care of the rest!</p>}/>
                </div>

                <div    data-aos="fade-up" data-aos-duration="2000" data-aos-offset="700"  ><InfoBlock
                                           text={
                                               <p style={{marginLeft:60,marginBottom:30}}  >
                                                   <p className={styles1.info_title}>You can do this!</p>
                                                   <p className={styles1.info_text}>
                                                       Sit back and watch in absolute awe as Poprey delivers numerous insta
                                                       comments to your page.
                                                       Watch the number of comments grow – exactly as planned and when you
                                                       ordered them!
                                                       Last but not least is our excellent guarantee – if you have any
                                                       problems,
                                                       our dedicated and efficient customer service staff is here to help –
                                                       get in touch 24/7!
                                                   </p>
                                                   <p className={styles1.info_title} style={{marginTop: 30}}>It’s really as
                                                       easy as that!</p>
                                                   <p className={styles1.info_text}>
                                <span style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap'
                                }}>
                                    <li>Fast delivery</li>
                                    <li>Efficient results</li>
                                    <li>No passwords required</li>
                                    <li>Premium quality</li>
                                    <li>Affordable prices</li>
                                </span>
                                                       So don’t wait for your IG competitors to get to us before you! Go
                                                       ahead and get cracking
                                                       because the clock is ticking – especially when you’re on Instagram.
                                                   </p>
                                               </p>}
                                           reverse={false}
                                           img="/commentsinfo3.png" alt={"Instagram comments"}/>
                </div>
            </div>
        </Layer>
    )
        ;
};

export default BuyInstagramComments;
