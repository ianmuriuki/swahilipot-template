import React from 'react';

import PageContent from '@/components/joinUs/PageContent';
import Form from '@/components/joinUs/Form';

export default function JoinUsPage() {
  return (
    <>
      
      <PageContent />
      <Form />
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       title: "Join SwahiliPot Hub - Become Part of Our Community",
//       description: "Join our vibrant community of innovators, creators, and change-makers. Together, we can make a difference."
//     }
//   };
// }