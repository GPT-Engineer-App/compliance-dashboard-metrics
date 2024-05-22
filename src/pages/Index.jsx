import React from "react";
import { Container, VStack, HStack, Text, Box, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, IconButton } from "@chakra-ui/react";
import { FaChartBar, FaShieldAlt } from "react-icons/fa";

const data = {
  lexicons: [
    { name: "Insider Trading", hits: 120 },
    { name: "Market Manipulation", hits: 95 },
    { name: "Fraud", hits: 80 },
    { name: "Money Laundering", hits: 60 },
    { name: "Bribery", hits: 45 },
  ],
  policies: [
    { name: "Anti-Money Laundering", effectiveness: "High" },
    { name: "Insider Trading Prevention", effectiveness: "Medium" },
    { name: "Market Manipulation Prevention", effectiveness: "Low" },
  ],
};

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={4}>
          Compliance Dashboard
        </Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Highest Hitting Lexicons
          </Heading>
          <StatGroup>
            {data.lexicons.map((lexicon, index) => (
              <Stat key={index} border="1px" borderColor="gray.200" borderRadius="md" p={4}>
                <StatLabel>{lexicon.name}</StatLabel>
                <StatNumber>{lexicon.hits}</StatNumber>
                <StatHelpText>Hits</StatHelpText>
              </Stat>
            ))}
          </StatGroup>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Policy Effectiveness
          </Heading>
          <VStack spacing={4}>
            {data.policies.map((policy, index) => (
              <HStack key={index} border="1px" borderColor="gray.200" borderRadius="md" p={4} w="100%" justifyContent="space-between">
                <Box>
                  <Text fontSize="lg" fontWeight="bold">
                    {policy.name}
                  </Text>
                  <Text>Effectiveness: {policy.effectiveness}</Text>
                </Box>
                <IconButton aria-label="Policy Icon" icon={<FaShieldAlt />} size="lg" />
              </HStack>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
