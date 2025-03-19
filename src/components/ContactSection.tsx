import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Icon,
  Link,
  useColorModeValue,
  SimpleGrid,
  Badge,
  HStack,
  Divider,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ContactSection = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "whiteAlpha.100");
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const gradientBg = useColorModeValue(
    "linear(to-br, blue.50, brand.50, blue.50)",
    "linear(to-br, gray.900, gray.800, gray.900)"
  );
  const highlightColor = useColorModeValue("brand.500", "brand.300");

  const socialLinks = [
    {
      label: "GitHub",
      icon: FaGithub,
      href: `https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`,
      hoverColor: "gray.700",
      hoverBg: "gray.100",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ydvsailendar/",
      hoverColor: "white",
      hoverBg: "linkedin.500",
    },
    {
      label: "YouTube",
      icon: FaYoutube,
      href: `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`,
      hoverColor: "white",
      hoverBg: "red.500",
    },
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: "Hemel Hempstead, United Kingdom",
    },
    {
      icon: FaPhone,
      text: "+44 7503 117315",
      link: "tel:+447503117315",
    },
    {
      icon: FaEnvelope,
      text: "ydvsailendar.official@gmail.com",
      link: "mailto:ydvsailendar.official@gmail.com",
    },
  ];

  return (
    <Box bg={gradientBg} py={16} id="contact">
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <VStack spacing={4} textAlign="center" maxW="2xl">
            <Badge
              colorScheme="brand"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              Contact Information
            </Badge>
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
              fontWeight="bold"
              letterSpacing="tight"
            >
              Let's Connect
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="xl" mx="auto">
              Reach out to discuss DevOps solutions, cloud architecture, or any
              opportunities for collaboration.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={8}
            w="full"
            maxW="6xl"
          >
            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              gridColumn={{ lg: "1 / 2" }}
            >
              <Box
                bg={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={borderColor}
                h="full"
              >
                <VStack spacing={6} align="start" height="full">
                  <Heading size="md" color="brand.700">
                    Contact Information
                  </Heading>

                  <VStack spacing={4} align="start" width="full">
                    {contactInfo.map((item, index) => (
                      <HStack key={index} spacing={3} color="gray.600">
                        <Icon
                          as={item.icon}
                          boxSize={5}
                          color={highlightColor}
                        />
                        {item.link ? (
                          <Link
                            href={item.link}
                            color="gray.600"
                            _hover={{ color: highlightColor }}
                          >
                            {item.text}
                          </Link>
                        ) : (
                          <Text>{item.text}</Text>
                        )}
                      </HStack>
                    ))}
                  </VStack>

                  <Divider borderColor={borderColor} />

                  <VStack spacing={4} align="start" width="full">
                    <Heading size="sm" color="brand.700">
                      My Availability
                    </Heading>
                    <Text color="gray.600">
                      I'm currently open to DevOps Engineering opportunities and
                      consulting projects.
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </MotionBox>

            {/* Get in Touch */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              gridColumn={{ lg: "2 / 4" }}
            >
              <Box
                bg={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={borderColor}
                h="full"
              >
                <VStack spacing={6} align="start" height="full">
                  <Heading size="md" color="brand.700">
                    Get in Touch
                  </Heading>
                  <Text color="gray.600">
                    Whether you have a question about DevOps, want to
                    collaborate, or just want to say hi, I'll try my best to get
                    back to you!
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4} w="full">
                    <Button
                      as="a"
                      href="mailto:ydvsailendar.official@gmail.com"
                      size="lg"
                      colorScheme="brand"
                      leftIcon={<Icon as={FaEnvelope} />}
                      rightIcon={<Icon as={FaArrowRight} />}
                      w="full"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "lg",
                      }}
                      transition="all 0.2s"
                    >
                      Send me an email
                    </Button>
                  </SimpleGrid>

                  <Divider borderColor={borderColor} />

                  <VStack spacing={4} width="full">
                    <Heading size="sm" color="brand.700">
                      Connect on Social Media
                    </Heading>

                    <HStack
                      spacing={4}
                      width="full"
                      flexWrap="wrap"
                      justify="center"
                    >
                      {socialLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          isExternal
                          _hover={{ textDecoration: "none" }}
                        >
                          <Button
                            leftIcon={<Icon as={link.icon} />}
                            size="md"
                            variant={
                              link.label === "YouTube" ? "solid" : "outline"
                            }
                            colorScheme={
                              link.label === "YouTube" ? "red" : undefined
                            }
                            bg={
                              link.label === "YouTube" ? "red.600" : undefined
                            }
                            color={
                              link.label === "YouTube" ? "white" : undefined
                            }
                            _hover={{
                              bg: link.hoverBg,
                              color: link.hoverColor,
                              borderColor: "transparent",
                              transform: "translateY(-2px)",
                              boxShadow:
                                link.label === "YouTube" ? "md" : undefined,
                            }}
                            transition="all 0.2s"
                          >
                            {link.label === "YouTube" ? "YouTube" : link.label}
                          </Button>
                        </Link>
                      ))}
                    </HStack>

                    <Box w="full" mt={4}>
                      <Text fontSize="sm" color="gray.500" textAlign="center">
                        Follow me for DevOps tutorials, cloud infrastructure
                        guides, and technology insights.
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactSection;
