import * as React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Link,
  useColorModeValue,
  useDisclosure,
  Menu,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  Text,
  MenuButton,
} from "@chakra-ui/react";
import { VscChevronDown, VscChevronUp, VscLinkExternal } from "react-icons/vsc";

const Links = ["Upload", "Download", "List Files"];

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <HStack>
  <Text>
    <Link
      px={2}
      py={2}
      rounded={"md"}
      _hover={{
        paddingLeft: "2rem",
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>

  </Text>
  </HStack>
);
export function NavbarComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={5}>
        <Flex h={12} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"lg"}
            icon={isOpen ? <VscChevronUp /> : <VscChevronDown />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={5} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://en.gravatar.com/userimage/201595333/f3dd1e8dbfb72909d7144aa202c42da0.jpeg"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                <VscLinkExternal />
                  <NavLink>Profile</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink>Active Servers</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink>Settings</NavLink>
                </MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={5} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>

              {Links.map((link) => (
                
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
