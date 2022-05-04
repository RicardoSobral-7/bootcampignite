import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData &&
        <Box mr="4" textAlign="right">
          <Text>Ricardo Sobral</Text>
          <Text color="gray.300" fontSize="small">riki.sobral@gmail.com</Text>
        </Box>
      }

      <Avatar size="md" name="Ricardo Sobral" src='https://github.com/RicardoSobral-7.png' />
    </Flex>
  )
}