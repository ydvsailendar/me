import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Link,
  Badge,
  Card,
  CardBody,
  useColorModeValue,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaJenkins,
  FaTerminal,
  FaDatabase,
  FaServer,
  FaGitlab,
  FaCode,
  FaCloudversify,
  FaNetworkWired,
  FaPython,
  FaNodeJs,
  FaLock,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";
import {
  SiTerraform,
  SiAnsible,
  SiGrafana,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPrometheus,
} from "react-icons/si";
import { useState } from "react";

interface CertificateData {
  title: string;
  image: string;
  link: string;
}

interface CertificateProps {
  cert: CertificateData;
  borderColor: string;
  bgColor: string;
}

const certData: CertificateData[] = [
  {
    title: "AWS Certified DevOps Engineer",
    image: "/devops.png",
    link: "https://www.credly.com/badges/61b676ac-1350-4aab-9b4c-7b570a03bca5/public_url",
  },
  {
    title: "Google Cloud DevOps Engineer",
    image: "/gcp.png",
    link: "https://www.credential.net/your-gcp-cert-id",
  },
  {
    title: "Microsoft Azure DevOps Engineer Expert",
    image: "/azure.png",
    link: "https://www.credly.com/your-azure-cert-id",
  },
  {
    title: "Certified Kubernetes Administrator",
    image: "/cka.png",
    link: "https://www.credly.com/your-kubernetes-cert-id",
  },
];

const skills = [
  {
    category: "Cloud Platforms",
    items: [
      { name: "AWS Cloud", icon: FaAws },
      { name: "Microsoft Azure", icon: FaCloudversify },
      { name: "Google Cloud", icon: FaCloudversify },
      { name: "AWS CDK", icon: FaAws },
      { name: "Cloud SDKs", icon: FaCode },
    ],
  },
  {
    category: "Infrastructure & Containerization",
    items: [
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker", icon: FaDocker },
      { name: "Terraform", icon: SiTerraform },
      { name: "CloudFormation", icon: FaAws },
    ],
  },
  {
    category: "CI/CD & Automation",
    items: [
      { name: "Jenkins", icon: FaJenkins },
      { name: "GitHub Actions", icon: FaGithub },
      { name: "GitLab Pipelines", icon: FaGitlab },
      { name: "Ansible", icon: SiAnsible },
      { name: "Shell Scripting", icon: FaTerminal },
    ],
  },
  {
    category: "Security Operations",
    items: [
      { name: "IAM & Access Control", icon: FaUserShield },
      { name: "Security Scanning", icon: FaShieldAlt },
      { name: "Compliance Automation", icon: FaLock },
      { name: "Secrets Management", icon: FaLock },
      { name: "Vulnerability Assessment", icon: FaShieldAlt },
    ],
  },
  {
    category: "Monitoring & Observability",
    items: [
      { name: "Grafana", icon: SiGrafana },
      { name: "ELK Stack", icon: FaServer },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "CloudWatch", icon: FaAws },
      { name: "Log Analysis", icon: FaTerminal },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "API Design", icon: FaNetworkWired },
      { name: "RESTful Services", icon: FaCode },
      { name: "Microservices", icon: FaNetworkWired },
      { name: "Python", icon: FaPython },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
  {
    category: "Databases & Data",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "DynamoDB", icon: FaAws },
      { name: "ETL Pipelines", icon: FaDatabase },
      { name: "Data Migration", icon: FaDatabase },
    ],
  },
  {
    category: "Architecture & Design",
    items: [
      { name: "System Architecture", icon: FaServer },
      { name: "Cloud-Native Design", icon: FaCloudversify },
      { name: "Serverless Architecture", icon: FaCloudversify },
      { name: "High Availability", icon: FaNetworkWired },
      { name: "Scalable Systems", icon: FaServer },
    ],
  },
];

const Certificate = ({ cert, borderColor, bgColor }: CertificateProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Tooltip label={cert.title} placement="top">
      <Link href={cert.link} isExternal>
        <Box
          p={2}
          borderRadius="md"
          border="1px solid"
          borderColor={borderColor}
          bg={bgColor}
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          width={{ base: "70px", sm: "80px" }}
          height={{ base: "70px", sm: "80px" }}
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          position="relative"
        >
          {!imgError ? (
            <Image
              src={cert.image}
              alt={cert.title}
              width="90%"
              height="90%"
              objectFit="contain"
              onError={() => {
                console.error(`Failed to load image: ${cert.image}`);
                setImgError(true);
              }}
            />
          ) : (
            <Text
              fontSize={{ base: "2xs", sm: "xs" }}
              fontWeight="bold"
              textAlign="center"
            >
              {cert.title
                .split(" ")
                .map((word: string) => word[0])
                .join("")}
            </Text>
          )}
        </Box>
      </Link>
    </Tooltip>
  );
};

const SkillsSection = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const iconColor = useColorModeValue("brand.500", "brand.300");

  return (
    <Box w="full" px={{ base: 4, md: 0 }}>
      <VStack spacing={{ base: 8, md: 12 }} align="stretch">
        {/* Certifications */}
        <VStack spacing={{ base: 4, md: 6 }} align="center">
          <Heading size={{ base: "md", md: "lg" }} textAlign="center">
            Professional Certifications
          </Heading>
          <SimpleGrid
            columns={{ base: 2, sm: 4 }}
            spacing={{ base: 3, md: 6 }}
            width="100%"
            maxWidth="560px"
            justifyItems="center"
          >
            {certData.map((cert, index) => (
              <Certificate
                key={index}
                cert={cert}
                borderColor={borderColor}
                bgColor={bgColor}
              />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Areas of Expertise */}
        <VStack spacing={{ base: 6, md: 8 }}>
          <VStack spacing={{ base: 2, md: 3 }} textAlign="center">
            <Heading size={{ base: "md", md: "lg" }}>
              Areas of Expertise
            </Heading>
            <Text
              maxW="2xl"
              color="gray.600"
              fontSize={{ base: "sm", md: "md" }}
            >
              Here are the key technology areas where I can help you with
              DevOps, cloud engineering, application development, and
              infrastructure optimization
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 3, md: 6 }}
            width="100%"
          >
            {skills.map((category) => (
              <Card
                key={category.category}
                variant="outline"
                bg={bgColor}
                borderColor={borderColor}
                _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                <CardBody p={{ base: 3, md: 5 }}>
                  <VStack spacing={{ base: 3, md: 4 }} align="start">
                    <Heading size={{ base: "sm", md: "md" }} color="brand.500">
                      {category.category}
                    </Heading>
                    <VStack
                      spacing={{ base: 2, md: 3 }}
                      align="stretch"
                      width="100%"
                    >
                      {category.items.map((skill) => (
                        <HStack key={skill.name} spacing={3}>
                          <Icon
                            as={skill.icon}
                            boxSize={{ base: 4, md: 5 }}
                            color={iconColor}
                          />
                          <Text fontSize={{ base: "sm", md: "md" }}>
                            {skill.name}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Contact CTA */}
        <Box
          p={{ base: 4, md: 8 }}
          borderRadius="2xl"
          bg="brand.50"
          border="1px solid"
          borderColor="brand.100"
        >
          <VStack spacing={{ base: 3, md: 4 }} textAlign="center">
            <Badge
              colorScheme="brand"
              px={3}
              py={1}
              borderRadius="full"
              fontSize={{ base: "xs", md: "sm" }}
            >
              Let's Collaborate
            </Badge>
            <Heading size={{ base: "sm", md: "md" }} color="brand.700">
              Need help with your DevOps, Security, or Development challenges?
            </Heading>
            <Text
              color="gray.600"
              maxW="2xl"
              fontSize={{ base: "sm", md: "md" }}
            >
              Whether you're looking to implement CI/CD pipelines, enhance
              security operations, design cloud-native systems, develop backend
              services, or optimize your infrastructure, I'm here to help.
            </Text>
            <Link href="#contact" _hover={{ textDecoration: "none" }}>
              <Badge
                variant="solid"
                colorScheme="brand"
                px={{ base: 3, md: 4 }}
                py={{ base: 1.5, md: 2 }}
                borderRadius="full"
                cursor="pointer"
                fontSize={{ base: "sm", md: "md" }}
                _hover={{ bg: "brand.600", transform: "translateY(-1px)" }}
                transition="all 0.2s"
              >
                Get in Touch
              </Badge>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default SkillsSection;
