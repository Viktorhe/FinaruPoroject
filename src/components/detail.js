import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Detail = ({selectedThread}) => {
    console.log(selectedThread)
    return (
        <div>
        {
            selectedThread.map( (e, idx) => {
                return (
                    <Paper key={idx}>
                    <Typography variant="h3" component="h1">
                    {e.title}
                    </Typography>
                    <Typography variant="h5" component="p">
                    {new Date(e.date).toString()}
                    </Typography> 
                    <Typography variant="h5" component="p">
                    {[...e.category].toString()}
                    </Typography>
                    <Typography variant="h5" component="p">
                    <span dangerouslySetInnerHTML={{ __html:e.message }} />
                    </Typography>
                    <Typography component="p">
                        Watched : {e.watched}
                    </Typography>
                    </Paper>
                )
            })
        }
    </div>
    )
}
export default Detail