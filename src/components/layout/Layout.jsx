import { Suspense } from 'react';

import Container from '../container/Container';
import AppBar from '../appBar/AppBar';

const Layout = ({ children }) => {
  return (
    // <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
    <div>
      <Container>
        <AppBar />
      </Container>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
    // </div>
  );
};

export default Layout;
