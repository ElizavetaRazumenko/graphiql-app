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
import { useState } from 'react';

const Main = () => {
  const [isInputOpened, setIsInputOpened] = useState(false);

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
                <DoneIcon sx={{ fontSize: 40, cursor: 'pointer' }} />
              </ChangeEndpointInput>
            )}
            <PlayButton>
              <PlayCircleIcon sx={{ fontSize: 40 }} />
            </PlayButton>
          </QueryButtons>
          <QueryEdit>
            {`# Welcome to GraphiQL
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
          </QueryEdit>
        </QueryEditor>
        <QueryFooter>
          <QueryFooterLinks direction="row" spacing="100px">
            <Link>Variables</Link>
            <Link>Headers</Link>

            <ArrowButton>
              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 40 }} />
            </ArrowButton>
          </QueryFooterLinks>
          <QueryFooterWindow></QueryFooterWindow>
        </QueryFooter>
      </QueryEditorWrapper>
      <QueryResult>
        {`{
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
      </QueryResult>
      <DocumentationButton>
        <MenuRoundedIcon />
      </DocumentationButton>
    </MainWrapper>
  );
};

export default Main;
