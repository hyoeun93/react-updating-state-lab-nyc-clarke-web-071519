import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor () {
        super();
        this.state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    renderChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12 
            }
        })
    }

    renderResolutionChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        });
    }
    render() {

        return (
            <div>
            <button className="bitrate" onClick={this.renderChange}></button>
            <button className="resolution" onClick={this.renderResolutionChange}></button>
            </div>
        ) 

    }
}

export default YouTubeDebugger;
