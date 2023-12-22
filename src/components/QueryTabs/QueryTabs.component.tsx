import Tab from '@mui/material/Tab';
import React, { useEffect, useRef, useState } from 'react';

import { ArrowButton } from './styled/ArrowButton';
import { QueryFooter } from './styled/QueryFooter';
import { QueryFooterLinks } from './styled/QueryFooterLinks';
import { QueryFooterWindow } from './styled/QueryFooterWindow';
import { Box, Tabs, Collapse } from '@mui/material';
import { TabPanel } from './styled';
import { inputSelector } from '../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setHeadersValue, setVariablesValue } from '../../store/slices';

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
  const dispatch = useAppDispatch();
  const { headers, variables } = useAppSelector(inputSelector);

  const [currentTab, setCurrentTab] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const queryTabRef = useRef<HTMLTextAreaElement>(null);

  const changeHeadersHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(setHeadersValue(e.target.value));

  const changeVariablesHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(setVariablesValue(e.target.value));

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
            value={variables}
            onChange={changeVariablesHandle}
          ></QueryFooterWindow>
        </CustomTabPanel>
        <CustomTabPanel value={currentTab} index={1}>
          <QueryFooterWindow
            ref={queryTabRef}
            value={headers}
            onChange={changeHeadersHandle}
          ></QueryFooterWindow>
        </CustomTabPanel>
      </Collapse>
    </QueryFooter>
  );
};

export default QueryTabs;
