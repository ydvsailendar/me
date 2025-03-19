import { Box, VStack, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import GitHubSection from "./components/GitHubSection";
import YouTubeSection from "./components/YouTubeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1" bg="gray.50">
        <Container maxW="container.xl" px={{ base: 4, lg: 8 }} centerContent>
          <VStack spacing={{ base: 12, md: 16, lg: 24 }} w="full" py={8}>
            <SkillsSection />
            <ExperienceSection />
            <GitHubSection />
            <YouTubeSection />
            <ContactSection />
          </VStack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
