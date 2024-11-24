import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { KZ_IMG_PATH, NETFLIX_IMG_PATH } from './images';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            content: '',
            searchQuery: '', // Added state for search input
            tweets: [
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
                    id: 2,
                    authorName: 'Netflix Türkiye',
                    authorUsername: '@netflixtürkiye',
                    img: NETFLIX_IMG_PATH,
                    content: 'Güneşin doğmasına 3 saat kaldı, sezonu bitirmek zorunda değilsin. #YakamozS245',
                    replies: 197,
                    retweets: 127,
                    likes: 2.533,
                    topic: 'education'
                }
            ],
            filteredTweets: [] // Initial filtered tweets are empty
        };
    }

    componentDidMount() {
        // Initialize filtered tweets with all tweets
        this.setState({ filteredTweets: this.state.tweets });
    }

    onChangeTextInput = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    onSearchInputChange = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        this.setState({
            searchQuery,
            filteredTweets: this.state.tweets.filter(tweet =>
                tweet.content.toLowerCase().includes(searchQuery) ||
                tweet.authorName.toLowerCase().includes(searchQuery) ||
                tweet.topic.toLowerCase().includes(searchQuery)
            )
        });
    };

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
            topic: 'general'
        };

        this.setState({
            tweets: [...this.state.tweets, newTweet],
            filteredTweets: [...this.state.tweets, newTweet], // Update filtered tweets
            content: ''
        });
    };

    deleteTweet = (id) => {
        const updatedTweets = this.state.tweets.filter(item => item.id !== id);
        this.setState({
            tweets: updatedTweets,
            filteredTweets: updatedTweets.filter(tweet =>
                tweet.content.toLowerCase().includes(this.state.searchQuery) ||
                tweet.authorName.toLowerCase().includes(this.state.searchQuery) ||
                tweet.topic.toLowerCase().includes(this.state.searchQuery)
            )
        });
    };

    render() {
        const { content, searchQuery, filteredTweets } = this.state;

        return (
            <div className="w-50 mt-3">
                <h5 className="mx-3">Home</h5>
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search tweets..."
                    value={searchQuery}
                    onChange={this.onSearchInputChange}
                    className="form-control my-3"
                />
                <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweets} />
                <TweetsList tweets={filteredTweets} deleteTweet={this.deleteTweet} />
            </div>
        );
    }
}

export default Home;
