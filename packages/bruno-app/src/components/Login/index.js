import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { openCollection, importCollection } from 'providers/ReduxStore/slices/collections/actions';
import { IconBrandGithub, IconPlus, IconUpload, IconFolders, IconSpeakerphone, IconBook } from '@tabler/icons';

import Bruno from 'components/Bruno';
import CreateCollection from 'components/Sidebar/CreateCollection';
import ImportCollection from 'components/Sidebar/ImportCollection';
import ImportCollectionLocation from 'components/Sidebar/ImportCollectionLocation';
import StyledWrapper from './StyledWrapper';

const Login = ({ parentStateSetter }) => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(0);

  useEffect(() => {
    parentStateSetter(isAuthenticated);
  }, [parentStateSetter, isAuthenticated]);

  const doLogin = () => {
    setIsAuthenticated(true);
    /*dispatch(openCollection()).catch(
      (err) => console.log(err) && toast.error('An error occurred while opening the collection')
    );*/
  };

  return (
    <StyledWrapper className="clear-left clear-right">
      <div className="">
        <div className="text-xl font-semibold select-none">
          <span>
            <Bruno width={80} />
          </span>
          <div className="uppercase font-bold mt-2 heading-banner">Bolt</div>
        </div>
      </div>

      <div className="container items-center">
        <div className="uppercase font-semibold mt-20">
          <text className="block w-full pl-1 py-1 heading">Login</text>
        </div>
        <div className="mt-4 flex-wrap items-center collection-options select-none">
          <div className="flex items-center">
            <input
              type="text"
              className="block border-solid border-2 border-red w-80 pl-3 py-4 mb-6 sm:text-sm"
              placeholder="Username"
            ></input>
          </div>
          <div className="flex items-center">
            <input
              type="password"
              className="block border-solid border-2 border-red-70 w-80 pl-3 py-4 sm:text-sm"
              placeholder="Password"
            ></input>
          </div>
          <div className="flex items-center" onClick={() => doLogin(true)}>
            <input
              type="submit"
              className="submit btn btn-sm btn-secondary w-1/3 h-10 py-4 mt-6"
              placeholder="Loing"
              name="Login"
            ></input>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Login;
