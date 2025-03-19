import React from 'react';
import BoardMembers from '@/components/About/board/BoardMembers';
import Breadcrumb from '@/components/Common/Breadcrumb';

export default function BoardMembersPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="py-16 bg-orange-50 dark:bg-gray-800">
        <div className="container-custom mx-auto px-6">
          <Breadcrumb 
            pageName="Board Members" 
            description="Meet the visionary leaders guiding our organization" 
          />
        </div>
      </section>

      {/* Board Members Component */}
      <BoardMembers />
    </>
  );
}
