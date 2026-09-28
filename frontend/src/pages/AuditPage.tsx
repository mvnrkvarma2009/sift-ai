import React from 'react';
import { Layout } from '../components/layout/Layout';
import { AuditTimeline } from '../components/verification/AuditTimeline';
import { RightPanelWidgets } from '../components/dashboard/RightPanelWidgets';

export const AuditPage: React.FC = () => {
  const rightSidebar = (
    <div className="space-y-6">
      <RightPanelWidgets />
    </div>
  );

  return (
    <Layout showSidebar showRightSidebar rightSidebarContent={rightSidebar}>
      <AuditTimeline />
    </Layout>
  );
};
