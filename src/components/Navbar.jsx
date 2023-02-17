import {
   Box,
   HStack,
   IconButton,
   Spacer,
   useColorMode,
   useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useAuth } from '../contexts';
import Navlink from './Navlink';

export function Navbar() {
   const { toggleColorMode } = useColorMode();
   const { logout, currentUser } = useAuth();

   return (
      <Box
         borderBottom="2px"
         borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
         mb={4}
         py={4}
      >
         <HStack
            justifyContent="flex-end"
            maxW="container.lg"
            mx="auto"
            spacing={4}
         >
            <Navlink
               to="/react-project-test"
               name="Firebase Authentication"
               size="lg"
            />
            <Spacer />
            {!currentUser && (
               <Navlink to="/react-project-test/login" name="Login" />
            )}
            {!currentUser && (
               <Navlink to="/react-project-test/register" name="Register" />
            )}
            {currentUser && (
               <Navlink to="/react-project-test/profile" name="Profile" />
            )}
            {currentUser && (
               <Navlink
                  to="/logout"
                  name="Logout"
                  onClick={async (e) => {
                     e.preventDefault();
                     logout();
                  }}
               />
            )}
            <IconButton
               variant="ghost"
               icon={useColorModeValue(<FaSun />, <FaMoon />)}
               onClick={toggleColorMode}
               aria-label="toggle-dark-mode"
            />
         </HStack>
      </Box>
   );
}
