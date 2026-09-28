import React from 'react';
import { Layout } from '../components/layout/Layout';
import { FeedList } from '../components/dashboard/FeedList';
import { RightPanelWidgets } from '../components/dashboard/RightPanelWidgets';
import { QueryInput } from '../components/dashboard/QueryInput';

export const DashboardPage: React.FC = () => {
  const rightSidebar = (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">ASK SIFT</p>
        <QueryInput compact />
      </div>
      <RightPanelWidgets />
    </div>
  );

  return (
    <Layout showSidebar showRightSidebar rightSidebarContent={rightSidebar}>
      <FeedList />
    </Layout>
  );
};
