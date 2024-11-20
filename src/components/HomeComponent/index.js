import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { KZ_IMG_PATH, NETFLIX_IMG_PATH} from './images';

class Home extends React.Component {
    constructor(){
        super();

        this.state = {
            count: 0,
            content: '',
            tweets: [
                {
                    id: 0,
                    authorName: 'Netflix Türkiye ',
                    authorUsername: '@netflixtürkiye',
                    img: NETFLIX_IMG_PATH,
                    content: 'Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. #YakamozS245',
                    replies: 197,
                    retweets: 127,
                    likes: 2.533,
                    topic: 'politics'
                },
                {
                    id: 1,
                    authorName: 'Netflix Türkiye',
                    authorUsername: '@netflixtürkiye',
                    img: NETFLIX_IMG_PATH,
                    content: 'Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. #YakamozS245',
                    replies: 197,
                    retweets: 127,
                    likes: 2.533,
                    topic: 'education'
                },
                {
                    id:2,
                    authorName: 'Netflix Türkiye ',
                    authorUsername: '@netflixtürkiye',
                    img: NETFLIX_IMG_PATH,
                    content: 'Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. #YakamozS245',
                    replies: 197,
                    retweets: 127,
                    likes: 2.533,
                    topic: 'education'
                },
            ],
            filteredTweets: [
                {
                id: 0,
                authorName: 'Netflix Türkiye',
                authorUsername: '@netflixtürkiye',
                img: NETFLIX_IMG_PATH,
                content: 'Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. #YakamozS245',
                replies: 197,
                retweets: 127,
                likes: 2.533,
                topic: 'politics'
            },
            {
                id: 1,
                authorName: 'Netflix Türkiye',
                authorUsername: '@netflixtürkiye',
                img: NETFLIX_IMG_PATH,
                content: 'Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. #YakamozS245',
                replies: 197,
                retweets: 127,
                likes: 2.533,
                topic: 'education'
            },
            {
                id:2,
                authorName: 'Netflix Türkiye',
                authorUsername: '@netflixtürkiye',
                img: NETFLIX_IMG_PATH,
                content: 'Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. #YakamozS245',
                replies: 197,
                retweets: 127,
                likes: 2.533,
                topic: 'education'
            }
        ]
        }
    }

    onChangeTextInput = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    addToTweets = () => {
        const newTweet = {
            id: this.state.tweets.length,
            authorName: 'Netflix Türkiye',
            authorUsername: '@netflixtürkiye',
            img: NETFLIX_IMG_PATH,
            content: this.state.content,
            replies: 0,
            retweets: 0,
            likes: 0,
            topic: 'shi'
        }

        this.setState({
            tweets: [...this.state.tweets, newTweet ],
            content: ''
        })
    }

    deleteTweet = (id) => {
        this.setState({
            tweets: this.state.tweets.filter(item=>item.id!==id)
        })
    }

    filterTweetsByTopic = (topic) => {
        console.log('filter', topic)
        this.setState({
            filteredTweets: this.state.tweets.filter(item=>item.topic === topic)
        })
    }
 
    render(){
        const { tweets, content } = this.state;

        return(
            <div className="w-50 mt-3">
                <h5 className="mx-3">Home</h5>
                <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweets}/>
                <TweetsList tweets={tweets} deleteTweet={this.deleteTweet}/>
            </div>
        )
    }
}

export default Home;