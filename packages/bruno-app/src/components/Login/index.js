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
    <StyledWrapper className="pb-4 px-6 mt-6">
      <div className="">
        <div className="text-xl font-semibold select-none">
          <span>
            <Bruno width={80} />
          </span>
          Bolt
        </div>
      </div>

      <div className="uppercase font-semibold heading mt-10">Login</div>
      <div className="mt-4 flex items-center collection-options select-none">
        <div className="flex items-center">
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="flex items-center ml-6">
          <input type="password" placeholder="Password"></input>
        </div>
        <div className="flex items-center ml-6" onClick={() => doLogin(true)}>
          <input type="submit" placeholder="Loing" name="Login"></input>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Login;
