import { ApiBase } from '@/api';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: any) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();

    const pathname = usePathname();

    useEffect(() => {
      const accessToken = ApiBase.getAccessToken();
      if (!accessToken) {
        // If not authenticated, redirect to login page with the original destination URL
        router.replace(`/login?returnUrl=${pathname}`);
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
