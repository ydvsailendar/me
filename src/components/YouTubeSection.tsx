import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Image,
  Icon,
  Link,
  AspectRatio,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  useColorModeValue,
  Badge,
  Flex,
  Tooltip,
  Divider,
} from "@chakra-ui/react";
import {
  FaYoutube,
  FaPlay,
  FaExternalLinkAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    publishedAt: string;
  };
}

const YouTubeSection = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cacheTimestamp, setCacheTimestamp] = useState<number | null>(null);

  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const cardBg = useColorModeValue("white", "gray.800");
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const gradientBg = useColorModeValue(
    "linear(to-br, red.50, white, red.50)",
    "linear(to-br, gray.900, gray.800, gray.900)"
  );

  // Fallback videos in case API fails
  const fallbackVideos: Video[] = [
    {
      id: { videoId: "xr-hRMU85Z0" },
      snippet: {
        title:
          "Secure Your Docker Image: SAST, SCA, Gitleaks, Linting & Vulnerability Scans!",
        description:
          "Learn how to implement comprehensive security scanning for your Docker images including SAST, SCA, secret scanning, and vulnerability assessment.",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/xr-hRMU85Z0/hqdefault.jpg",
          },
        },
        publishedAt: new Date(
          Date.now() - 7 * 24 * 60 * 60 * 1000
        ).toISOString(), // 1 week ago
      },
    },
    {
      id: { videoId: "WNmPh9IQi-A" },
      snippet: {
        title:
          "Say Goodbye to DynamoDB! Use S3 for Terraform State Locking Like a Pro 🔒🚀",
        description:
          "Discover how to use S3 for Terraform state locking instead of DynamoDB, providing a simpler and more cost-effective solution for your infrastructure management.",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/WNmPh9IQi-A/hqdefault.jpg",
          },
        },
        publishedAt: new Date(
          Date.now() - 14 * 24 * 60 * 60 * 1000
        ).toISOString(), // 2 weeks ago
      },
    },
    {
      id: { videoId: "jITLfdxiXUg" },
      snippet: {
        title:
          "🚀 Deploy AWS Lambda with Terraform: ZIP & Docker Edition! 🐳📦",
        description:
          "A comprehensive guide to deploying AWS Lambda functions using Terraform with both ZIP and Docker deployment options for maximum flexibility.",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/jITLfdxiXUg/hqdefault.jpg",
          },
        },
        publishedAt: new Date(
          Date.now() - 21 * 24 * 60 * 60 * 1000
        ).toISOString(), // 3 weeks ago
      },
    },
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
      const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      // First, try to use localStorage cache
      const cachedData = localStorage.getItem("youtubeVideos");
      const cachedTimestamp = localStorage.getItem("youtubeVideosTimestamp");

      if (cachedData && cachedTimestamp) {
        const cachedVideos = JSON.parse(cachedData);
        const timestamp = parseInt(cachedTimestamp, 10);
        const now = Date.now();

        // If cache is valid (less than 24 hours old), use it and don't make API call
        if (now - timestamp < CACHE_DURATION) {
          console.log("Using cached YouTube data");
          setVideos(cachedVideos);
          setCacheTimestamp(timestamp);
          setLoading(false);
          return;
        }
      }

      // No valid cache, check if API key and channel ID exist
      if (!apiKey || !channelId) {
        console.warn("Missing API key or channel ID");
        setVideos(fallbackVideos);
        setError(
          !apiKey
            ? "API key is missing - using placeholder videos"
            : "Channel ID is missing - using placeholder videos"
        );
        setLoading(false);
        return;
      }

      // Only make API call if cache is expired or doesn't exist
      try {
        console.log("Cache expired or not found, making API call");
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=3&type=video`
        );

        if (!response.ok) {
          throw new Error(
            `YouTube API error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        if (!data.items || data.items.length === 0) {
          throw new Error("No videos found for this channel");
        }

        // Update cache with fresh data
        const timestamp = Date.now();
        localStorage.setItem("youtubeVideos", JSON.stringify(data.items));
        localStorage.setItem("youtubeVideosTimestamp", timestamp.toString());

        setVideos(data.items);
        setCacheTimestamp(timestamp);
        setError(null);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);

        // If we still have cached data (even if expired), use it as fallback
        if (cachedData) {
          console.log("Using expired cached data due to API error");
          setVideos(JSON.parse(cachedData));
          setError(null); // No error message for cached content
        } else {
          // No cache available, use fallback data
          setVideos(fallbackVideos);
          setError(null); // No error message for featured videos
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [channelId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
        <Skeleton>
          <AspectRatio ratio={16 / 9} w="full">
            <Box />
          </AspectRatio>
        </Skeleton>
        <Skeleton height="24px" width="80%" />
        <Skeleton height="16px" width="90%" />
        <Skeleton height="16px" width="70%" />
      </VStack>
    </Box>
  );

  return (
    <Box bg={gradientBg} py={16} id="videos">
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <VStack spacing={4} textAlign="center" maxW="2xl">
            <Badge
              colorScheme="red"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              YouTube Channel
            </Badge>
            <Heading
              size="2xl"
              bgGradient="linear(to-r, red.500, red.600)"
              bgClip="text"
              fontWeight="bold"
            >
              {!loading && videos === fallbackVideos
                ? "Featured Videos"
                : "Latest Videos"}
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="xl" mx="auto">
              Check out my latest DevOps tutorials, cloud infrastructure guides,
              and technology reviews.
            </Text>
            {cacheTimestamp && (
              <Text fontSize="xs" color="gray.500">
                Last updated: {new Date(cacheTimestamp).toLocaleString()}
              </Text>
            )}
            <HStack spacing={4}>
              <Link
                href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<Icon as={FaYoutube} />}
                  colorScheme="red"
                  size="md"
                  _hover={{
                    bg: "red.600",
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.3s"
                >
                  Subscribe to Channel
                </Button>
              </Link>
            </HStack>
          </VStack>

          {error ? (
            videos.length > 0 ? (
              <Box mb={4} w="full">
                <Alert status="info" variant="subtle" borderRadius="lg">
                  <AlertIcon />
                  <Text fontSize="sm">{error}</Text>
                </Alert>
              </Box>
            ) : (
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
                <AlertTitle mb={4}>Failed to Load Videos</AlertTitle>
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
            )
          ) : (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={8}
              w="full"
            >
              {loading
                ? Array(3)
                    .fill(0)
                    .map((_, i) => <SkeletonCard key={i} />)
                : videos.map((video, index) => (
                    <MotionBox
                      key={video.id.videoId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <Link
                        href={
                          video.id.videoId.startsWith("VIDEO_ID") ||
                          video.id.videoId.startsWith("fallback")
                            ? `https://www.youtube.com/channel/${channelId}`
                            : `https://www.youtube.com/watch?v=${video.id.videoId}`
                        }
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
                            boxShadow: "xl",
                            borderColor: "red.200",
                          }}
                          boxShadow="md"
                          height="100%"
                          position="relative"
                        >
                          <VStack align="start" spacing={4} height="100%">
                            <Box position="relative" w="full">
                              <AspectRatio ratio={16 / 9} w="full">
                                <Image
                                  src={video.snippet.thumbnails.high.url}
                                  alt={video.snippet.title}
                                  objectFit="cover"
                                  borderRadius="lg"
                                />
                              </AspectRatio>
                              <Box
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                bg="red.500"
                                p={3}
                                width="52px"
                                height="52px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="full"
                                opacity={0.9}
                                _hover={{ opacity: 1, bg: "red.600" }}
                                transition="all 0.3s"
                              >
                                <Icon as={FaPlay} color="white" boxSize={5} />
                              </Box>
                            </Box>

                            <Flex
                              justify="space-between"
                              width="100%"
                              align="center"
                            >
                              <Heading
                                size="md"
                                color={headingColor}
                                fontWeight="semibold"
                                noOfLines={2}
                              >
                                {video.snippet.title}
                              </Heading>
                              <Tooltip label="Watch on YouTube" placement="top">
                                <Icon
                                  as={FaExternalLinkAlt}
                                  color="red.500"
                                  boxSize={4}
                                />
                              </Tooltip>
                            </Flex>

                            <Text
                              color={textColor}
                              fontSize="sm"
                              noOfLines={2}
                              flexGrow={1}
                            >
                              {video.snippet.description}
                            </Text>

                            <Divider borderColor={borderColor} />

                            <HStack spacing={2} fontSize="xs" color="gray.500">
                              <Icon as={FaCalendarAlt} boxSize={3} />
                              <Text>
                                {formatDate(video.snippet.publishedAt)}
                              </Text>
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

export default YouTubeSection;
