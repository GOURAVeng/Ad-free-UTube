import React from 'react';
import NextVideos from '../NextVideos';
import { Grid } from '@material-ui/core';

const VideoList = ({videos, onVideoClick}) => {

    const listVideos = videos.map((video, id) => <NextVideos onVideoClick={onVideoClick} key={id} video={video} />)

    return (
        <Grid container spacing={10} >
            {listVideos}
        </Grid>
    )
}

export default VideoList;