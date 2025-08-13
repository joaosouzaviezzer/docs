import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function ApiPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js';
    script.onload = () => {
      window.Redoc.init('/openapi.yaml', {
        hideSidebar: true,
        hideDownloadButton: true
      }, document.getElementById('redoc-container'));
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Layout title="API Reference" description="Documentação da API via OpenAPI">
      <div id="redoc-container" style={{ width: '100%' }} />
    </Layout>
  );
}
