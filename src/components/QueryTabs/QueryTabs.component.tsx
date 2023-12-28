import Tab from '@mui/material/Tab';
import React, { useState } from 'react';

import { ArrowButton } from './styled/ArrowButton';
import { QueryFooter } from './styled/QueryFooter';
import { QueryFooterLinks } from './styled/QueryFooterLinks';
import { Box, Tabs, Collapse } from '@mui/material';
import { TabPanel } from './styled';
import QueryTextarea from '../QueryTextarea/QueryTextarea.component';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <TabPanel
      opened="true"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </TabPanel>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface QueryTabsProps {
  currentHeaders: string;
  currentVariables: string;
  setCurrentHeadersValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentVariablesValue: React.Dispatch<React.SetStateAction<string>>;
}

const QueryTabs = ({
  currentHeaders,
  currentVariables,
  setCurrentHeadersValue,
  setCurrentVariablesValue,
}: QueryTabsProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const changeHeadersHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCurrentHeadersValue(e.target.value);

  const changeVariablesHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCurrentVariablesValue(e.target.value);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const tabClick = (index: number) => {
    if (isOpen && currentTab === index) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <QueryFooter>
      <QueryFooterLinks direction="row">
        <Tabs value={currentTab} onChange={handleChange}>
          <Tab
            label="Variables"
            {...a11yProps(0)}
            onClick={() => tabClick(0)}
          />
          <Tab label="Headers" {...a11yProps(1)} onClick={() => tabClick(1)} />
        </Tabs>

        <ArrowButton
          opened={isOpen.toString()}
          onClick={() => setIsOpen(!isOpen)}
        />
      </QueryFooterLinks>
      <Collapse in={isOpen}>
        <CustomTabPanel value={currentTab} index={0}>
          <QueryTextarea
            value={currentVariables}
            onChange={changeVariablesHandle}
          ></QueryTextarea>
        </CustomTabPanel>
        <CustomTabPanel value={currentTab} index={1}>
          <QueryTextarea
            value={currentHeaders}
            onChange={changeHeadersHandle}
          ></QueryTextarea>
        </CustomTabPanel>
      </Collapse>
    </QueryFooter>
  );
};

export default QueryTabs;
