import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Badge,
  Icon,
  Link,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  useColorModeValue,
  Divider,
  Flex,
  Tag,
  TagLabel,
  Tooltip,
} from "@chakra-ui/react";
import { FaGithub, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

interface LanguageColors {
  [key: string]: string;
  JavaScript: string;
  TypeScript: string;
  Python: string;
  Java: string;
  HTML: string;
  CSS: string;
  Shell: string;
  Go: string;
  Rust: string;
  Ruby: string;
  "C++": string;
  C: string;
  "C#": string;
  PHP: string;
  default: string;
}

const GitHubSection = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = import.meta.env.VITE_GITHUB_USERNAME;

  const borderColor = useColorModeValue("gray.100", "whiteAlpha.100");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const subHeadingColor = useColorModeValue("gray.600", "gray.400");
  const gradientBg = useColorModeValue(
    "linear(to-br, gray.50, white, gray.50)",
    "linear(to-br, gray.900, gray.800, gray.900)"
  );
  const languageColors: LanguageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
    Go: "#00ADD8",
    Rust: "#dea584",
    Ruby: "#701516",
    "C++": "#f34b7d",
    C: "#555555",
    "C#": "#178600",
    PHP: "#4F5D95",
    default: "gray.400",
  };

  useEffect(() => {
    const fetchRepos = async () => {
      if (!username) {
        setError(
          "GitHub username is missing. Please check your environment variables."
        );
        setLoading(false);
        return;
      }

      const token = import.meta.env.VITE_GITHUB_TOKEN;
      if (!token) {
        setError(
          "GitHub token is missing. Please check your environment variables."
        );
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 403) {
            throw new Error(
              "GitHub API rate limit exceeded. Please try again later."
            );
          }
          throw new Error(
            `GitHub API error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setRepos(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        setError(
          error instanceof Error
            ? error.message
            : "Failed to fetch GitHub repositories. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  // Function to get language color
  const getLanguageColor = (language: string) => {
    return language
      ? languageColors[language] || languageColors.default
      : languageColors.default;
  };

  const SkeletonCard = () => (
    <Box
      p={6}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      bg={cardBg}
      boxShadow="md"
      transition="all 0.3s"
      height="100%"
    >
      <VStack align="start" spacing={4}>
        <Skeleton height="24px" width="80%" />
        <Skeleton height="16px" width="90%" />
        <Skeleton height="16px" width="70%" />
        <Skeleton height="16px" width="60%" />
        <HStack spacing={4} mt={2}>
          <Skeleton height="20px" width="60px" />
          <Skeleton height="20px" width="60px" />
        </HStack>
      </VStack>
    </Box>
  );

  return (
    <Box bg={gradientBg} py={16} id="projects">
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
              My Projects
            </Badge>
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
              fontWeight="bold"
            >
              Featured Projects
            </Heading>
            <Text fontSize="xl" color={textColor}>
              Here are some of my recent open-source projects and contributions.
              These showcase my skills in DevOps, Cloud Engineering, and more.
            </Text>
            <Link
              href={`https://github.com/${username}`}
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Button
                leftIcon={<Icon as={FaGithub} />}
                variant="outline"
                colorScheme="brand"
                size="md"
                _hover={{
                  bg: "brand.500",
                  color: "white",
                  borderColor: "brand.500",
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                }}
                transition="all 0.3s"
              >
                View All Projects
              </Button>
            </Link>
          </VStack>

          {error ? (
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              borderRadius="xl"
              p={8}
              w="full"
            >
              <AlertIcon boxSize={8} mr={0} mb={4} />
              <AlertTitle mb={4}>Failed to Load Projects</AlertTitle>
              <AlertDescription maxWidth="sm" mb={4}>
                {error}
              </AlertDescription>
              <Button
                colorScheme="red"
                onClick={() => window.location.reload()}
                size="sm"
              >
                Try Again
              </Button>
            </Alert>
          ) : (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={8}
              w="full"
            >
              {loading
                ? Array(6)
                    .fill(0)
                    .map((_, i) => <SkeletonCard key={i} />)
                : repos.map((repo, index) => (
                    <MotionBox
                      key={repo.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        href={repo.html_url}
                        isExternal
                        _hover={{ textDecoration: "none" }}
                      >
                        <Box
                          p={6}
                          borderRadius="xl"
                          border="1px solid"
                          borderColor={borderColor}
                          bg={cardBg}
                          transition="all 0.3s"
                          _hover={{
                            transform: "translateY(-4px)",
                            boxShadow: "xl",
                            borderColor: "brand.200",
                          }}
                          boxShadow="md"
                          height="100%"
                          position="relative"
                        >
                          <VStack align="start" spacing={4} height="100%">
                            <Flex
                              justify="space-between"
                              width="100%"
                              align="center"
                            >
                              <Heading
                                size="md"
                                color={headingColor}
                                fontWeight="semibold"
                                noOfLines={1}
                              >
                                {repo.name}
                              </Heading>
                              <Tooltip label="View on GitHub" placement="top">
                                <Icon
                                  as={FaExternalLinkAlt}
                                  color="brand.500"
                                  boxSize={4}
                                />
                              </Tooltip>
                            </Flex>

                            <Text
                              color={textColor}
                              fontSize="sm"
                              noOfLines={3}
                              flexGrow={1}
                            >
                              {repo.description || "No description available"}
                            </Text>

                            {repo.topics && repo.topics.length > 0 && (
                              <Flex flexWrap="wrap" gap={2}>
                                {repo.topics.slice(0, 3).map((topic) => (
                                  <Tag
                                    size="sm"
                                    key={topic}
                                    colorScheme="brand"
                                    variant="subtle"
                                  >
                                    <TagLabel>{topic}</TagLabel>
                                  </Tag>
                                ))}
                                {repo.topics.length > 3 && (
                                  <Tag
                                    size="sm"
                                    colorScheme="gray"
                                    variant="subtle"
                                  >
                                    <TagLabel>
                                      +{repo.topics.length - 3} more
                                    </TagLabel>
                                  </Tag>
                                )}
                              </Flex>
                            )}

                            <Divider borderColor={borderColor} />

                            <HStack
                              spacing={6}
                              width="100%"
                              justify="space-between"
                            >
                              {repo.language && (
                                <HStack spacing={2}>
                                  <Box
                                    w="10px"
                                    h="10px"
                                    borderRadius="full"
                                    bg={getLanguageColor(repo.language)}
                                  />
                                  <Text fontSize="xs" color={subHeadingColor}>
                                    {repo.language}
                                  </Text>
                                </HStack>
                              )}

                              <HStack spacing={4}>
                                <HStack spacing={1}>
                                  <Icon
                                    as={FaStar}
                                    color="yellow.400"
                                    boxSize={3}
                                  />
                                  <Text fontSize="xs" color={subHeadingColor}>
                                    {repo.stargazers_count}
                                  </Text>
                                </HStack>

                                <HStack spacing={1}>
                                  <Icon
                                    as={BiGitRepoForked}
                                    color={subHeadingColor}
                                    boxSize={3}
                                  />
                                  <Text fontSize="xs" color={subHeadingColor}>
                                    {repo.forks_count}
                                  </Text>
                                </HStack>
                              </HStack>
                            </HStack>
                          </VStack>
                        </Box>
                      </Link>
                    </MotionBox>
                  ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default GitHubSection;
