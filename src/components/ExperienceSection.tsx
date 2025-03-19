import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBriefcase, FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior DevOps Engineer",
    company: "SafeDent UK Limited",
    location: "Hemel Hempstead, UK",
    period: "June 2023 - Present",
    type: "Permanent",
    achievements: [
      "Led infrastructure automation using Terraform, seamlessly integrating with GitLab pipelines. This initiative reduced deployment time by 37% and simplified the automation process, enhancing overall deployment efficiency.",
      "Integrated comprehensive security testing into the CI/CD pipelines using GitLab, incorporating static code analysis, vulnerability scanning, and compliance checks.",
      "Enhanced monitoring and observability across servers and containers by implementing full-stack monitoring, tracing, logging, and alerting using open-source tools.",
      "Built custom scripts for automating the cleanup of legacy system logs, old repository branches, and snapshots, reducing operational toil and improving development standards.",
      "Designed and deployed Kubernetes clusters for various projects, focusing on security, dependency management, and high availability.",
      "Implemented CDN solutions using AWS CloudFront to accelerate content delivery and enhance user experience for the portal.",
      "Managed and maintained RDS databases, including performing schema designs, upgrades, and optimizations to ensure high availability and performance.",
      "Managed a multi-node Kubernetes cluster with multiple namespaces to efficiently organize projects and resources.",
    ],
  },
  {
    title: "Site Reliability Engineer",
    company: "Cloudfactory",
    location: "Reading, UK",
    period: "April 2020 - May 2023",
    type: "Permanent",
    achievements: [
      "Reduced developer efforts by 69% by creating reusable GitHub Actions fragments to streamline the entire CI/CD process.",
      "Performed on-call duties and conducted root cause analysis for critical incidents, developing detailed playbooks for proactive problem management.",
      "Automated the maintenance of legacy Ruby on Rails projects hosted on EC2 servers by leveraging EC2 Image Builder for AMI creation.",
      "Migrated Percona MySQL databases and Redis instances from traditional servers to managed services like AWS RDS and ElastiCache.",
      "Managed cost and infrastructure reliability by conducting regular environment teardowns at the end of each sprint.",
      "Led migration of CloudFormation deployment to an organized Serverless Compose approach using Makefile.",
      "Implemented AWS Transfer for S3 to facilitate secure file transfers to and from Amazon S3.",
    ],
  },
  {
    title: "Cloud Engineer",
    company: "Bottle Technologies",
    location: "Kathmandu, Nepal",
    period: "April 2018 - March 2020",
    type: "Permanent",
    achievements: [
      "Migrated a monolithic server-based application to a modern, serverless architecture using AWS Lambda and ECS Fargate.",
      "Developed a custom, reusable authentication and authorization framework on top of AWS Cognito.",
      "Architected and optimized Jenkins pipelines with bash and python script to support multi-branch releases.",
      "Led initiatives in cost optimization and autoscaling, implementing billing alerts and right-sizing instance types.",
      "Configured comprehensive observability solutions, including monitoring, logging, alerts, and tracing across applications.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Prominere Software Solutions",
    location: "Kakinada, India",
    period: "April 2016 - February 2018",
    type: "Part Time",
    achievements: [
      "Designed and developed scalable frontend and backend applications using TypeScript.",
      "Built and integrated GraphQL schemas and resolvers, enabling efficient querying and real-time data updates.",
      "Developed RESTful API endpoints to support frontend applications and external integrations.",
      "Implemented authentication and authorization mechanisms using industry-standard practices.",
      "Utilized modern development tools and practices, including Docker for containerization.",
      "Maintained and updated application documentation, including API specifications and architectural diagrams.",
    ],
  },
];

const ExperienceSection = () => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const timelineBg = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12} align="start">
        <Heading
          as="h2"
          size="xl"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          Professional Experience
        </Heading>

        <VStack spacing={8} align="start" position="relative" w="full">
          {/* Timeline line */}
          <Box
            position="absolute"
            left="24px"
            top="0"
            bottom="0"
            width="2px"
            bg={timelineBg}
          />

          {experiences.map((exp, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              w="full"
            >
              <HStack align="start" spacing={6}>
                <Box position="relative">
                  <Icon
                    as={FaBriefcase}
                    boxSize={12}
                    p={3}
                    bg="white"
                    color="blue.500"
                    borderRadius="full"
                    border="2px solid"
                    borderColor={borderColor}
                    boxShadow="lg"
                  />
                </Box>

                <VStack
                  align="start"
                  flex={1}
                  bg="whiteAlpha.900"
                  p={6}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={borderColor}
                  _hover={{
                    borderColor: "blue.500",
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.2s"
                >
                  <HStack
                    justify="space-between"
                    w="full"
                    wrap="wrap"
                    spacing={4}
                  >
                    <VStack align="start" spacing={1}>
                      <Heading as="h3" size="md" color="blue.600">
                        {exp.title}
                      </Heading>
                      <Text color="blue.500" fontWeight="medium">
                        {exp.company}
                      </Text>
                    </VStack>
                    <HStack spacing={2} align="center">
                      <Badge variant="solid" colorScheme="blue">
                        {exp.type}
                      </Badge>
                      <Text color="gray.500" fontSize="sm">
                        {exp.period}
                      </Text>
                    </HStack>
                  </HStack>

                  <Text color="gray.500" fontSize="sm">
                    {exp.location}
                  </Text>

                  <VStack align="start" spacing={3} pt={4}>
                    {exp.achievements.map((achievement, i) => (
                      <HStack key={i} align="start" spacing={3}>
                        <Icon
                          as={FaCircle}
                          boxSize={2}
                          color="blue.500"
                          mt={2}
                        />
                        <Text color="gray.600">{achievement}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </HStack>
            </MotionBox>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default ExperienceSection;
