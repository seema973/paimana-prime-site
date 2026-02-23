import { useEffect } from 'react';

const Documents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Documents</h1>
      <p className="text-gray-600">Content coming soon.</p>
    </div>
  );
};

export default Documents;
