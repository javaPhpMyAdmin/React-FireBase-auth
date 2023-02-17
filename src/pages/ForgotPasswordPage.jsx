import {
   Button,
   Center,
   chakra,
   FormControl,
   FormLabel,
   Heading,
   Input,
   Stack,
   useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Card, DividerWithText } from '../components';
import { useAuth } from '../contexts';

export function ForgotPasswordPage() {
   const history = useHistory();
   const { forgotPassword } = useAuth();
   const toast = useToast();
   const [email, setEmail] = useState('');
   const homePageProduction = '/react-project-test';

   return (
      <Layout>
         <Heading textAlign="center" my={12}>
            Forgot password
         </Heading>
         <Card maxW="md" mx="auto" mt={4}>
            <chakra.form
               onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                     forgotPassword(email);
                     toast({
                        description: `An email is sent to ${email} for password reset instructions.`,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                     });
                  } catch (error) {
                     console.log(error.message);
                     toast({
                        description: error.message,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                     });
                  }
               }}
            >
               <Stack spacing="6">
                  <FormControl id="email">
                     <FormLabel>Email address</FormLabel>
                     <Input
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </FormControl>
                  <Button
                     type="submit"
                     colorScheme="pink"
                     size="lg"
                     fontSize="md"
                  >
                     Submit
                  </Button>
               </Stack>
            </chakra.form>
            <DividerWithText my={6}>OR</DividerWithText>
            <Center>
               <Button
                  variant="link"
                  onClick={() => history.push(homePageProduction + '/login')}
               >
                  Login
               </Button>
            </Center>
         </Card>
      </Layout>
   );
}
