import React from 'react'
import Search from '../Search';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';
import utubeApi from '../../api'
import { Grid, Paper } from '@material-ui/core'


class App extends React.Component{
  state = {
    videos: [],
    selectedVideo: null
  }
  
  onVideoClick = (video) => {
    this.setState({selectedVideo: video});
  }

  handleSubmit = async (searchTerm) => {
    const response = await utubeApi.get('search', { 
      params: {
        part: 'snippet',
        maxResults: 10,
        key: '[Your-key]',
        q: searchTerm
      },
    });
    
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
        <Grid container style={{ padding: "10px", backgroundColor: "#F5F5F5"}}>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} >
                  <Search onFormSubmit={this.handleSubmit} />
              </Grid>  
              <Grid item xs={7}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={5}>
                <VideoList videos={videos} onVideoClick={this.onVideoClick} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default App;
