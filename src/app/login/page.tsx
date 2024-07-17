'use client';

import { Suspense, useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import AuthApi from '@/api/auth';
import { ApiBase } from '@/api';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Component = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
          const { accessToken, refreshToken } = response.data;

          ApiBase.setAccessToken(accessToken);
          ApiBase.setRefreshToken(refreshToken);
          setIsLoading(false);

          if (returnUrl) {
            return router.push(`${returnUrl}`);
          }

          return router.push('/home');
        }
      }
    } catch {
      setIsLoading(false);
    }
  };

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
        <Button
          size="lg"
          radius="full"
          className="bg-primary text-onPrimary"
          isLoading={isLoading}
          onClick={handleLoginPress}
        >
          Continue
        </Button>
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
