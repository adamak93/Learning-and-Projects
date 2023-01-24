import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Frequently Asked Questions page" />
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						An Important Question...
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem Upsum Dolor Sic Amet, Consectetur adipiscing elit. Suspendisse
						malesuda lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						A second Important Question...
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem Upsum Dolor Sic Amet, Consectetur adipiscing elit. Suspendisse
						malesuda lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						Another slightly more Important Question...
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem Upsum Dolor Sic Amet, Consectetur adipiscing elit. Suspendisse
						malesuda lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						But wait, an Important Question...
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem Upsum Dolor Sic Amet, Consectetur adipiscing elit. Suspendisse
						malesuda lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						Yet another Important Question...
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem Upsum Dolor Sic Amet, Consectetur adipiscing elit. Suspendisse
						malesuda lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						Another Important Question... the last one
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem Upsum Dolor Sic Amet, Consectetur adipiscing elit. Suspendisse
						malesuda lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
