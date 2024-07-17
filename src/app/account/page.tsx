'use client';

import { Suspense, useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import AuthApi from '@/api/auth';
import { withAuth } from '@/hocs';

const Component = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoginPress = async () => {
    try {
      if (email && password) {
        setIsLoading(true);

        await AuthApi.loginUser({
          email,
          password,
        });

        setIsLoading(false);
      }
    } catch {
      setIsLoading(false);
    }
  };

  const renderContent = () => (
    <div className="flex bg-white justify-center items-center">
      <div className="w-1/3 flex flex-col h-screen justify-center items-center">
        <div className="font-semibold mb-4 text-lg text-onBackground">
          Account
        </div>
      </div>
    </div>
  );

  return <main>{renderContent()}</main>;
};

const Page = () => {
  return (
    <div>
      <Suspense>
        <Component />
      </Suspense>
    </div>
  );
};

export default withAuth(Page);
