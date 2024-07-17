'use client';

import { Suspense, useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';
import { withAuth } from '@/hocs';
import UserApi from '@/api/user';
import { ApiBase } from '@/api';
import { User } from '@/types';

const Component = () => {
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);

  const [user, setUser] = useState<User | undefined>(undefined);

  const [showMessage, setShowMessage] = useState(false);

  const userId = ApiBase.getUserId();

  const fetchUser = async () => {
    try {
      if (userId) {
        const response = await UserApi.getUser(+userId);

        setUser(response.data);
      }
    } catch {
      ApiBase.removeTokens();
    }
  };

  const handleCloseAccountPress = async () => {
    try {
      setIsButtonLoading(true);

      if (userId) {
        await UserApi.deleteUser(+userId);

        ApiBase.removeTokens();
      }

      setShowMessage(true);

      setIsButtonLoading(false);
    } catch {
      setIsButtonLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const renderContent = () => {
    if (!user) {
      return null;
    }

    if (showMessage) {
      return (
        <div className="flex bg-white justify-center items-center">
          <div className="w-1/3 flex flex-col h-screen justify-center items-center">
            <div className="flex flex-col font-semibold mb-4 text-lg text-onBackground bg-background p-6 rounded-lg justify-center items-center">
              <div className="text-lg text-center">
                Your Xpencil Account has been closed
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex bg-white justify-center items-center">
        <div className="w-1/3 flex flex-col h-screen justify-center items-center">
          <div className="flex flex-col font-semibold mb-4 text-lg text-onBackground bg-background p-6 rounded-lg justify-center items-center">
            <div className="mb-5 text-2xl text-center">
              Close Xpencil Account
            </div>
            <div className="mb-5 text-small text-center">{`Dear ${user?.name}, if you close your account, all of your user information will be deleted from our database`}</div>
            <Button
              size="lg"
              radius="full"
              className="bg-danger text-onPrimary"
              isLoading={isButtonLoading}
              onClick={handleCloseAccountPress}
            >
              Close Account
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return <main>{renderContent()}</main>;
};

const Page = withAuth(() => {
  return (
    <div>
      <Suspense>
        <Component />
      </Suspense>
    </div>
  );
});

export default Page;
