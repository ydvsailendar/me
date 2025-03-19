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
    <Box
      py={{ base: 6, md: 8 }}
      borderTopWidth="1px"
      borderColor={borderColor}
      bg={bgColor}
    >
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 4, md: 6 }} align="center">
          <HStack spacing={{ base: 5, md: 6 }}>
            <Link
              href={`https://github.com/${
                import.meta.env.VITE_GITHUB_USERNAME
              }`}
              isExternal
              color={iconColor}
              _hover={{ color: "brand.500" }}
            >
              <Icon as={FaGithub} boxSize={{ base: 4, md: 5 }} />
            </Link>
            <Link
              href={`https://youtube.com/channel/${
                import.meta.env.VITE_YOUTUBE_CHANNEL_ID
              }?sub_confirmation=1`}
              isExternal
              color={iconColor}
              _hover={{ color: "red.500" }}
            >
              <Icon as={FaYoutube} boxSize={{ base: 4, md: 5 }} />
            </Link>
            <Link
              href="https://linkedin.com/in/ydvsailendar"
              isExternal
              color={iconColor}
              _hover={{ color: "linkedin.500" }}
            >
              <Icon as={FaLinkedin} boxSize={{ base: 4, md: 5 }} />
            </Link>
          </HStack>

          <Text
            color={quoteColor}
            fontSize={{ base: "sm", md: "md" }}
            fontStyle="italic"
            maxW="2xl"
            textAlign="center"
            letterSpacing="tight"
          >
            "सफलताको मूल मन्त्र हो - कडा परिश्रम, दृढ संकल्प र निरन्तर प्रयास।"
          </Text>
          <Text
            color={quoteColor}
            fontSize={{ base: "xs", md: "sm" }}
            fontStyle="italic"
            mb={{ base: 2, md: 3 }}
          >
            The key to success is hard work, strong determination, and
            continuous effort.
          </Text>

          <Divider borderColor={borderColor} />

          <HStack
            justify={{ base: "center", md: "space-between" }}
            align="center"
            spacing={{ base: 2, md: 4 }}
            flexWrap="wrap"
            w="full"
          >
            <Text
              color={textColor}
              fontSize={{ base: "xs", md: "sm" }}
              textAlign={{ base: "center", md: "left" }}
            >
              © {year} Shailendra Yadav (शैलेन्द्र यादव). All rights reserved.
            </Text>
            <Text
              color={textColor}
              fontSize={{ base: "xs", md: "sm" }}
              textAlign={{ base: "center", md: "right" }}
            >
              DevOps Engineer | Cloud Infrastructure Specialist
            </Text>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
