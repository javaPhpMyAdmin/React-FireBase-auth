import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Layout } from '../components';

export default function TestPage() {
   return (
      <Layout>
         <Heading>PROTECTED PAGE</Heading>
         <Container maxW="container.lg" py={4}>
            <Text>THIS PAGE IS:</Text>
            <Text>
               Only for showing how REDIRECTS WORK, i.e. REDIRECT TO or BACK
            </Text>
         </Container>
      </Layout>
   );
}
