import { React, useState, useCallback } from 'react';
import classnames from 'classnames';
import Welcome from 'components/Welcome';
import RequestTabs from 'components/RequestTabs';
import RequestTabPanel from 'components/RequestTabPanel';
import Sidebar from 'components/Sidebar';
import { useSelector } from 'react-redux';
import StyledWrapper from './StyledWrapper';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/addon/scroll/simplescrollbars.css';
import Documentation from 'components/Documentation';
import Login from 'components/Login';

const SERVER_RENDERED = typeof navigator === 'undefined' || global['PREVENT_CODEMIRROR_RENDER'] === true;
if (!SERVER_RENDERED) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/sparql/sparql');
  require('codemirror/addon/comment/comment');
  require('codemirror/addon/dialog/dialog');
  require('codemirror/addon/edit/closebrackets');
  require('codemirror/addon/edit/matchbrackets');
  require('codemirror/addon/fold/brace-fold');
  require('codemirror/addon/fold/foldgutter');
  require('codemirror/addon/hint/show-hint');
  require('codemirror/addon/lint/lint');
  require('codemirror/addon/mode/overlay');
  require('codemirror/addon/scroll/simplescrollbars');
  require('codemirror/addon/search/jump-to-line');
  require('codemirror/addon/search/search');
  require('codemirror/addon/search/searchcursor');
  require('codemirror/keymap/sublime');

  require('codemirror-graphql/hint');
  require('codemirror-graphql/info');
  require('codemirror-graphql/jump');
  require('codemirror-graphql/lint');
  require('codemirror-graphql/mode');

  require('utils/codemirror/brunoVarInfo');
}

export default function Main() {
  const activeTabUid = useSelector((state) => state.tabs.activeTabUid);
  const isDragging = useSelector((state) => state.app.isDragging);
  const showHomePage = useSelector((state) => state.app.showHomePage);
  const [isAuthenticated, setIsAuthenticated] = useState(0);

  // Todo: write a better logging flow that can be used to log by turning on debug flag
  // Enable for debugging.
  // console.log(useSelector((state) => state.collections.collections));

  const className = classnames({
    'is-dragging': isDragging
  });

  const wrapperSetParentState = useCallback(
    (val) => {
      setIsAuthenticated(val);
    },
    [setIsAuthenticated]
  );

  return (
    <div>
      <StyledWrapper className={className}>
        {isAuthenticated ? (
          <>
            {' '}
            <Sidebar parentStateSetter={wrapperSetParentState} />
            <section className="flex flex-grow flex-col overflow-auto">
              {showHomePage ? (
                <Welcome />
              ) : (
                <>
                  <RequestTabs />
                  <RequestTabPanel key={activeTabUid} />
                </>
              )}
            </section>{' '}
          </>
        ) : (
          <Login parentState={isAuthenticated} parentStateSetter={wrapperSetParentState}></Login>
        )}
      </StyledWrapper>
    </div>
  );
}
