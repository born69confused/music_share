import { PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
import {
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Slider,
	Typography,
} from '@mui/material';
import React from 'react';
import QueuedSongList from './QueuedSongList';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		marginRight: '10px',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		padding: '0px 15px',
	},
	content: {
		flex: '1 0 auto',
	},
	thumbnail: {
		width: 150,
	},
	controls: {
		display: 'flex',
		alignIntems: 'center',
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
}));

export default function SongPlayer() {
	const classes = useStyles();
	return (
		<>
			<Card variant="outlined" className={classes.container}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography variant="h5" component="h3">
							Title
						</Typography>
						<Typography
							variant="subtitle1"
							component="p"
							color="textSecondary"
						>
							Artist
						</Typography>
					</CardContent>
					<div className={classes.controls}>
						<IconButton>
							<SkipPrevious />
						</IconButton>
						<IconButton>
							<PlayArrow className={classes.playIcon} />
						</IconButton>
						<IconButton>
							<SkipNext />
						</IconButton>
						<Typography
							variant="subtitle1"
							component="p"
							color="textSecondary"
						>
							00:00:00
						</Typography>
					</div>
					<Slider type="range" min={0} max={1} step={0.01} />
				</div>
				<CardMedia
					className={classes.thumbnail}
					image="http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg"
				/>
			</Card>
			<QueuedSongList />
		</>
	);
}
