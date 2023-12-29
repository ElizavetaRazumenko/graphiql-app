import Tab from '@mui/material/Tab';
import React, { useState } from 'react';

import { ArrowButton } from './styled/ArrowButton';
import { QueryFooter } from './styled/QueryFooter';
import { QueryFooterLinks } from './styled/QueryFooterLinks';
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
    <TabPanel opened="true" role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 1, height: '100%' }}>{children}</Box>}
    </TabPanel>
  );
}

interface QueryTabsProps {
  children: React.ReactNode;
}

const QueryTabs = ({ children }: QueryTabsProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

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
          <Tab label="Variables" onClick={() => tabClick(0)} />
          <Tab label="Headers" onClick={() => tabClick(1)} />
        </Tabs>

        <ArrowButton
          opened={isOpen.toString()}
          onClick={() => setIsOpen(!isOpen)}
        />
      </QueryFooterLinks>
      <Collapse in={isOpen}>
        <CustomTabPanel value={currentTab} index={0}>
          {(children as Array<React.JSX.Element>)[0]}
        </CustomTabPanel>
        <CustomTabPanel value={currentTab} index={1}>
          {(children as Array<React.JSX.Element>)[1]}
        </CustomTabPanel>
      </Collapse>
    </QueryFooter>
  );
};

export default QueryTabs;
