import {
  Box,
  Container,
  HStack,
  VStack,
  Icon,
  Link,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const textColor = useColorModeValue("gray.600", "gray.400");
  const quoteColor = useColorModeValue("gray.500", "gray.500");
  const iconColor = useColorModeValue("gray.400", "gray.500");
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box py={8} borderTopWidth="1px" borderColor={borderColor} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="center">
          <HStack spacing={6}>
            <Link
              href={`https://github.com/${
                import.meta.env.VITE_GITHUB_USERNAME
              }`}
              isExternal
              color={iconColor}
              _hover={{ color: "brand.500" }}
            >
              <Icon as={FaGithub} boxSize={5} />
            </Link>
            <Link
              href={`https://youtube.com/channel/${
                import.meta.env.VITE_YOUTUBE_CHANNEL_ID
              }?sub_confirmation=1`}
              isExternal
              color={iconColor}
              _hover={{ color: "red.500" }}
            >
              <Icon as={FaYoutube} boxSize={5} />
            </Link>
            <Link
              href="https://linkedin.com/in/ydvsailendar"
              isExternal
              color={iconColor}
              _hover={{ color: "linkedin.500" }}
            >
              <Icon as={FaLinkedin} boxSize={5} />
            </Link>
          </HStack>

          <Text
            color={quoteColor}
            fontSize="md"
            fontStyle="italic"
            maxW="2xl"
            textAlign="center"
            letterSpacing="tight"
          >
            "सफलताको मूल मन्त्र हो - कडा परिश्रम, दृढ संकल्प र निरन्तर प्रयास।"
          </Text>
          <Text color={quoteColor} fontSize="sm" fontStyle="italic" mb={3}>
            The key to success is hard work, strong determination, and
            continuous effort.
          </Text>

          <Divider borderColor={borderColor} />

          <HStack
            justify="space-between"
            align="center"
            spacing={4}
            flexWrap="wrap"
            w="full"
          >
            <Text color={textColor} fontSize="sm">
              © {year} Shailendra Yadav (शैलेन्द्र यादव). All rights reserved.
            </Text>
            <Text color={textColor} fontSize="sm">
              DevOps Engineer | Cloud Infrastructure Specialist
            </Text>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
