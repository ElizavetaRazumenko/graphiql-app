import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
} from '@mui/material';
import { ReactNode } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export type AccordionItemProps = AccordionProps & {
  summary: string;
  children: ReactNode;
};

const AccordionItem = (props: AccordionItemProps) => {
  const { summary, children } = props;
  return (
    <Accordion {...props} disableGutters sx={{ boxShadow: 'none' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {summary}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
