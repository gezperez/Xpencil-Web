import { ApiBase } from '@/api';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, ComponentType } from 'react';

type WithAuthProps = {
  [key: string]: any;
};

const withAuth = <P extends WithAuthProps>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P> => {
  const AuthComponent = (props: P) => {
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
