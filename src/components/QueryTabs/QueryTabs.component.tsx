import Tab from '@mui/material/Tab';
import React, { useEffect, useRef, useState } from 'react';

import { ArrowButton } from './styled/ArrowButton';
import { QueryFooter } from './styled/QueryFooter';
import { QueryFooterLinks } from './styled/QueryFooterLinks';
import { QueryFooterWindow } from './styled/QueryFooterWindow';
import { Box, Tabs, Collapse } from '@mui/material';
import { TabPanel } from './styled';

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

const QueryTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const queryTabRef = useRef<HTMLTextAreaElement>(null);

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

  useEffect(() => {
    if (queryTabRef.current) {
      queryTabRef.current.style.height =
        queryTabRef.current.scrollHeight + 'px';
    }
  }, [queryTabRef.current, isOpen]);

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
          <QueryFooterWindow
            ref={queryTabRef}
            defaultValue={`{
    "header1": "header",
    "header2": "corsign"
}`}
          ></QueryFooterWindow>
        </CustomTabPanel>
        <CustomTabPanel value={currentTab} index={1}>
          <QueryFooterWindow
            ref={queryTabRef}
            defaultValue={`{
    "header3": "header",
    "header4": "corsign"
}`}
          ></QueryFooterWindow>
        </CustomTabPanel>
      </Collapse>
    </QueryFooter>
  );
};

export default QueryTabs;
