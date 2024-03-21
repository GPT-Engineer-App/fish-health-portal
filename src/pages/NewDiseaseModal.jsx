import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Select, Button } from "@chakra-ui/react";

const NewDiseaseModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = React.useState("");
  const [severity, setSeverity] = React.useState("");
  const [treatment, setTreatment] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, severity, treatment });
    setName("");
    setSeverity("");
    setTreatment("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Disease</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Severity</FormLabel>
              <Select value={severity} onChange={(e) => setSeverity(e.target.value)}>
                <option value="">Select severity</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Treatment</FormLabel>
              <Input value={treatment} onChange={(e) => setTreatment(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="blue" mt={4}>
              Submit
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewDiseaseModal;
