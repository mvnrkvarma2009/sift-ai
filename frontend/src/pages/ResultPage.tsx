import React from 'react';
import { Layout } from '../components/layout/Layout';
import { QueryResult } from '../components/verification/QueryResult';
import { RightPanelWidgets } from '../components/dashboard/RightPanelWidgets';

export const ResultPage: React.FC = () => {
  const rightSidebar = (
    <div className="space-y-6">
      <RightPanelWidgets />
    </div>
  );

  return (
    <Layout showSidebar showRightSidebar rightSidebarContent={rightSidebar}>
      <QueryResult />
    </Layout>
  );
};
