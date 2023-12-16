import { Link } from '../../shared/Link';
import {
  ArrowButton,
  ChangeEndpoint,
  ChangeEndpointInput,
  DocumentationButton,
  MainWrapper,
  PlayButton,
  QueryButtons,
  QueryEdit,
  QueryEditor,
  QueryEditorWrapper,
  QueryFooter,
  QueryFooterLinks,
  QueryFooterWindow,
  QueryResult,
  QueryTitle,
} from './styled';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import DoneIcon from '@mui/icons-material/Done';

import { Input } from '../../shared/Input';
import { useEffect, useRef, useState } from 'react';
import { DocumentationModal } from '../../components/DocumentationModal';
import { QueryResultContainer } from './styled/QueryResultContainer';

const Main = () => {
  const [isSubWindowOpened, setSubWindowOpened] = useState<{
    opened: boolean;
    content: 'variables' | 'headers';
  }>({
    content: 'variables',
    opened: true,
  });

  const [isInputOpened, setIsInputOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const queryEditRef = useRef<HTMLTextAreaElement>(null);
  const queryJSONRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (queryEditRef.current) {
      queryEditRef.current.style.height =
        queryEditRef.current.scrollHeight + 'px';
    }
  }, [queryEditRef.current]);

  useEffect(() => {
    if (queryJSONRef.current) {
      queryJSONRef.current.style.height =
        queryJSONRef.current.scrollHeight + 'px';
    }
  }, [queryJSONRef.current]);

  const changeOpenedWindowHandle = (content?: 'variables' | 'headers') => {
    if (!content || content === isSubWindowOpened.content) {
      setSubWindowOpened({
        ...isSubWindowOpened,
        opened: !isSubWindowOpened.opened,
      });
    } else {
      if (isSubWindowOpened.opened) {
        if (content !== isSubWindowOpened.content) {
          setSubWindowOpened({
            ...isSubWindowOpened,
            content,
          });
        }
      } else {
        if (content !== isSubWindowOpened.content) {
          setSubWindowOpened({
            opened: !isSubWindowOpened.opened,
            content,
          });
        }
      }
    }
  };

  const changeInputOpenedHandle = () => setIsInputOpened(!isInputOpened);

  return (
    <MainWrapper>
      <QueryEditorWrapper>
        <QueryEditor>
          <QueryTitle>Query editor</QueryTitle>
          <QueryButtons direction="row">
            <ChangeEndpoint
              type="button"
              variant="contained"
              onClick={changeInputOpenedHandle}
            >
              {isInputOpened ? 'Close endpoint' : 'Change endpoint'}
            </ChangeEndpoint>
            {isInputOpened && (
              <ChangeEndpointInput direction="row" spacing="5px">
                <Input placeholder="Your endpoint" icon="endpoint" />
                <DoneIcon
                  onClick={() => setIsInputOpened(!isInputOpened)}
                  sx={{ fontSize: 40, cursor: 'pointer' }}
                />
              </ChangeEndpointInput>
            )}
            <PlayButton>
              <PlayCircleIcon sx={{ fontSize: 40 }} />
            </PlayButton>
          </QueryButtons>
          <QueryEdit
            ref={queryEditRef}
            defaultValue={`# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that start
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#   Prettify query:  Shift-Ctrl-P (or press the prettify button)
#
#  Merge fragments:  Shift-Ctrl-M (or press the merge button)
#
#        Run Query:  Ctrl-Enter (or press the play button)
#
#    Auto Complete:  Ctrl-Space (or just start typing)
#
`}
          ></QueryEdit>
        </QueryEditor>
        <QueryFooter>
          <QueryFooterLinks direction="row">
            <Link onClick={() => changeOpenedWindowHandle('variables')}>
              Variables
            </Link>
            <Link onClick={() => changeOpenedWindowHandle('headers')}>
              Headers
            </Link>

            <ArrowButton
              onClick={() => changeOpenedWindowHandle()}
              opened={isSubWindowOpened.opened.toString()}
            >
              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 40 }} />
            </ArrowButton>
          </QueryFooterLinks>
          <QueryFooterWindow
            opened={isSubWindowOpened.opened.toString()}
            defaultValue={`{
  "errors": [
    {
      "message": "Syntax Error: Unexpected <EOF>",
      "locations": [
        {
          "line": 32,
          "column": 1
        }
      ]
    }
  ]
}`}
          ></QueryFooterWindow>
        </QueryFooter>
      </QueryEditorWrapper>
      {!isModalOpen && (
        <QueryResultContainer>
          <QueryResult
            readOnly
            ref={queryJSONRef}
            defaultValue={`{
  "errors": [
    {
      "message": "Syntax Error: Unexpected <EOF>",
      "locations": [
        {
          "line": 32,
          "column": 1
        }
      ]
    }
  ]
}`}
          ></QueryResult>
          <DocumentationButton onClick={() => setIsModalOpen(true)}>
            <MenuRoundedIcon />
          </DocumentationButton>
        </QueryResultContainer>
      )}
      <DocumentationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </MainWrapper>
  );
};

export default Main;
