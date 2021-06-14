import dynamic from 'next/dynamic';

const MFE = dynamic(
  () => import('mfe2/app'),
  { loading: () => <p>Loading MFE...</p>, ssr: false }
);

const Package = () => <MFE />;

export default Package;
