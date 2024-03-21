import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, Menu, MenuButton, MenuList, MenuItem, Avatar, Table, Thead, Tbody, Tr, Th, Td, Input, Select } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const diagnoses = [
  { name: "Pancreas Disease", severity: "High", treatment: "Antibiotics" },
  { name: "Infectious Salmon Anemia", severity: "Critical", treatment: "Culling" },
  { name: "Sea Lice", severity: "Medium", treatment: "Chemical bath" },
  { name: "Amoebic Gill Disease", severity: "Low", treatment: "Freshwater bath" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");

  const filteredDiagnoses = diagnoses.filter((diagnosis) => {
    return diagnosis.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedSeverity === "" || diagnosis.severity === selectedSeverity);
  });

  return (
    <Box>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Fiskehelseportalen
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem>Oversikt</MenuItem>
              <MenuItem>Besøk</MenuItem>
              {/* Add other menu items */}
            </MenuList>
          </Menu>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <Button mr={4}>Oversikt</Button>
          <Button mr={4}>Besøk</Button>
          {/* Add other menu buttons */}
        </Box>

        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
              <Avatar size="sm" name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMTAzNzA0Mnww&ixlib=rb-4.0.3&q=80&w=1080" />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      <Box p={4}>
        <Heading as="h2" mb={4}>
          Djupesstallen
        </Heading>

        <Flex mb={4}>
          <Input placeholder="Search diagnoses..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mr={2} />
          <Select placeholder="Filter by severity" value={selectedSeverity} onChange={(e) => setSelectedSeverity(e.target.value)}>
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </Select>
        </Flex>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Severity</Th>
              <Th>Treatment</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredDiagnoses.map((diagnosis, index) => (
              <Tr key={index}>
                <Td>{diagnosis.name}</Td>
                <Td>{diagnosis.severity}</Td>
                <Td>{diagnosis.treatment}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Index;
