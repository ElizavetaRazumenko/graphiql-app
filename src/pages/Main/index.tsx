import { Button } from '../../shared/Button';
import { Link } from '../../shared/Link';
import {
  ArrowButton,
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

const Main = () => {
  return (
    <MainWrapper>
      <QueryEditorWrapper>
        <QueryEditor>
          <QueryTitle>Query editor</QueryTitle>
          <QueryButtons>
            <Button type="button" variant="contained">
              Change endpoint
            </Button>
            <PlayButton>
              <PlayCircleIcon />
            </PlayButton>
          </QueryButtons>
          <QueryEdit></QueryEdit>
        </QueryEditor>
        <QueryFooter>
          <QueryFooterLinks>
            <Link>Variables</Link>
            <Link>Headers</Link>

            <ArrowButton>
              <KeyboardArrowDownRoundedIcon />
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
