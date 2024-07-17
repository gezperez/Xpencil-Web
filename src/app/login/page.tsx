'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ApiBase } from '@/api';
import AuthApi from '@/api/auth';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from '@nextui-org/react';

const Component = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const router = useRouter();

  const searchParams = useSearchParams();

  const returnUrl = searchParams.get('returnUrl');

  const handleLoginPress = async () => {
    try {
      if (email && password) {
        setIsLoading(true);

        const response = await AuthApi.loginUser({
          email,
          password,
        });

        if (response.data) {
          const { accessToken, refreshToken, id } = response.data;

          ApiBase.setAccessToken(accessToken);
          ApiBase.setRefreshToken(refreshToken);
          ApiBase.setUserId(id);
          setIsLoading(false);

          if (returnUrl) {
            return router.push(`${returnUrl}`);
          }

          return router.push('/home');
        }
      }
    } catch (error: any) {
      setIsLoading(false);

      if (error?.response?.data?.statusCode) {
        return setError(error?.response?.data?.message);
      }

      return setError('Unknown Error');
    }
  };

  const content = (
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-tiny">{error}</div>
      </div>
    </PopoverContent>
  );

  const renderContent = () => (
    <div className="flex bg-white justify-center items-center">
      <div className="w-1/3 flex flex-col h-screen justify-center items-center">
        <div className="font-semibold mb-4 text-lg text-onBackground">
          Xpencil
        </div>
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onValueChange={setEmail}
          size="lg"
          className="mb-6"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onValueChange={setPassword}
          size="lg"
          className="mb-6"
        />
        <Popover
          placement={'bottom'}
          color="danger"
        >
          <PopoverTrigger>
            <Button
              size="lg"
              radius="full"
              className="bg-primary text-onPrimary"
              isLoading={isLoading}
              isDisabled={!email || !password}
              onClick={handleLoginPress}
            >
              Continue
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      </div>
    </div>
  );

  return <main>{renderContent()}</main>;
};

export default function Page() {
  return (
    <div>
      <Suspense>
        <Component />
      </Suspense>
    </div>
  );
}
