import {
  Box,
  Container,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Link,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionFlex = motion(Flex);

// Typing text animation component
interface TypingTextProps {
  text: string;
  duration?: number;
  loop?: boolean;
  onComplete?: () => void;
}

const TypingText = ({
  text,
  duration = 1,
  loop = false,
  onComplete = () => {},
}: TypingTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Reset animation when text changes
  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsTyping(true);
  }, [text]);

  // Handle cursor blinking
  useEffect(() => {
    const blinkInterval: ReturnType<typeof setInterval> = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(blinkInterval);
  }, []);

  // Handle typing animation
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, (duration * 1000) / text.length);
      } else {
        setIsTyping(false);
        onComplete();
        if (loop) {
          timeout = setTimeout(() => {
            setDisplayText("");
            setCurrentIndex(0);
            setIsTyping(true);
          }, 1000); // 1 second pause before restarting
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, duration, isTyping, loop, text, onComplete]);

  return (
    <Box display="inline" position="relative">
      {displayText}
      <Box
        as="span"
        display="inline-block"
        w="0.15em"
        h="1em"
        bg={showCursor ? "brand.500" : "transparent"}
        position="relative"
        top="0.1em"
        ml={1}
      />
    </Box>
  );
};

const Header = () => {
  const bgOverlay = useColorModeValue("whiteAlpha.400", "blackAlpha.400");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const [roleIndex, setRoleIndex] = useState(0);
  const [showNewRole, setShowNewRole] = useState(true);

  const roles = [
    "Senior DevOps Engineer",
    "Senior DevSecOps Engineer",
    "Senior SRE",
  ];

  // Cycle through roles every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fade out
      setShowNewRole(false);

      // After short delay, change role and fade in
      setTimeout(() => {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setShowNewRole(true);
      }, 300);
    }, 5000); // Change role every 5 seconds

    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <Box
      position="relative"
      overflow="hidden"
      minH="100vh"
      display="flex"
      alignItems="center"
      bgGradient="linear(to-r, brand.50, blue.50, purple.50)"
      py={20}
    >
      {/* Background blur overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={bgOverlay}
        backdropFilter="blur(80px)"
      />

      {/* Content */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={12}
        >
          {/* Text Content */}
          <VStack
            align={{ base: "center", lg: "start" }}
            spacing={6}
            flex={1}
            textAlign={{ base: "center", lg: "left" }}
          >
            <HStack spacing={3}>
              <Box
                width={3}
                height={3}
                borderRadius="full"
                bg="green.400"
                boxShadow="0 0 10px green"
              />
              <Text color="green.600" fontWeight="bold">
                Open to New Opportunities
              </Text>
            </HStack>

            <VStack align={{ base: "center", lg: "start" }} spacing={4}>
              <Box bg="transparent" w="full" maxW="2xl">
                <VStack align="start" spacing={2}>
                  <Box>
                    <Text
                      fontSize="sm"
                      color="brand.500"
                      fontFamily="'JetBrains Mono', monospace"
                      mb={1}
                    >
                      Hi, I'm
                    </Text>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexWrap={{ base: "wrap", md: "nowrap" }}
                      minHeight={{ base: "40px", md: "64px" }}
                    >
                      <Text
                        as="h1"
                        fontSize={{ base: "4xl", md: "5xl" }}
                        fontWeight="bold"
                        color={textColor}
                      >
                        Shailendra
                      </Text>
                      <Text
                        as="span"
                        color="brand.500"
                        ml={{ base: 1, md: 2 }}
                        fontWeight="medium"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontStyle="italic"
                      >
                        शैलेन्द्र
                      </Text>
                    </Box>
                  </Box>

                  <Box minHeight={{ base: "30px", md: "40px" }}>
                    <Text
                      as="h2"
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="medium"
                      color="gray.600"
                      fontFamily="'JetBrains Mono', monospace"
                      mt={0}
                      sx={{
                        opacity: showNewRole ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                        position: "relative",
                      }}
                    >
                      <TypingText
                        text={roles[roleIndex]}
                        duration={1.5}
                        loop={false}
                        onComplete={() => {}}
                      />
                    </Text>
                  </Box>

                  <Text
                    fontSize="xl"
                    color={textColor}
                    maxW="2xl"
                    lineHeight="tall"
                    opacity={0.9}
                    mt={3}
                    fontFamily="'Inter', sans-serif"
                  >
                    Specializing in cloud infrastructure, automation, and DevOps
                    best practices. Let's build scalable solutions together.
                  </Text>
                </VStack>
              </Box>
            </VStack>

            <HStack spacing={4} pt={4}>
              <Button
                as={Link}
                href={`https://github.com/${
                  import.meta.env.VITE_GITHUB_USERNAME
                }`}
                leftIcon={<Icon as={FaGithub} />}
                size="lg"
                variant="glass"
                isExternal
              >
                GitHub
              </Button>
              <Button
                as={Link}
                href={`https://youtube.com/channel/${
                  import.meta.env.VITE_YOUTUBE_CHANNEL_ID
                }`}
                leftIcon={<Icon as={FaYoutube} />}
                size="lg"
                colorScheme="red"
                variant="solid"
                _hover={{ bg: "red.600", color: "white" }}
                isExternal
              >
                Subscribe
              </Button>
              <Button
                as={Link}
                href="https://linkedin.com/in/ydvsailendar"
                leftIcon={<Icon as={FaLinkedin} />}
                size="lg"
                colorScheme="linkedin"
                variant="ghost"
                isExternal
              >
                Connect
              </Button>
            </HStack>
          </VStack>

          {/* Profile Image */}
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            flex={1}
            justify="center"
          >
            <Box
              position="relative"
              width="400px"
              height="400px"
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="2xl"
              bg="white"
            >
              <Image
                src="/profile.jpeg"
                alt="Shailendra Yadav (शैलेन्द्र यादव)"
                objectFit="cover"
                width="100%"
                height="100%"
                fallbackSrc="https://via.placeholder.com/400x400?text=Profile+Image"
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="whiteAlpha.900"
                backdropFilter="blur(8px)"
                p={4}
                textAlign="center"
              >
                <Text fontWeight="medium" color={textColor}>
                  Senior DevOps Engineer
                </Text>
                <Text fontSize="sm" color="gray.600">
                  SafeDent UK Limited
                </Text>
              </Box>
            </Box>
          </MotionFlex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
