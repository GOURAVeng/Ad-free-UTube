import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';

const NextVideos = ({video, onVideoClick}) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: "flex", alignItems: 'center', cursor: 'pointer'}} onClick={() => onVideoClick(video)}>
                <img alt="next videos" style={{ marginRight: '20px'}} src={video.snippet.thumbnails.medium.url} />
                <div style={{flexDirection:"column", display: 'flex'}}>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
                </div>
                
            </Paper>
        </Grid>
    );
}


export default NextVideos;