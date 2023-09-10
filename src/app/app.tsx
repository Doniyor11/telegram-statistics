import React, { FC, Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { AppError } from '@/app/config/app-error';
import { RoutesViews } from '@/app/config/routing/init';


import './styles/global.scss';
import { Container, MantineProvider } from '@mantine/core';

const ErrorFallback = ({ error }: FallbackProps) => {
  console.log(error, 'error boundary');
  return <AppError />;
};

export const App: FC = () => {
  return (
    <>
      <MantineProvider
        withNormalizeCSS withGlobalStyles

        theme={{
          fontFamily: 'Roboto, sans-serif',
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: 1500,
                },
              },
            },
          },
        }}
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<div>Loading...</div>}>
            <RoutesViews />
          </Suspense>
        </ErrorBoundary>
      </MantineProvider>
    </>
  );
};
