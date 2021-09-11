import React, { useContext, useState } from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { connector } from 'helpers';
import { Modal } from 'components/Modal';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import Form from 'containers/Form';
import InputField from 'containers/InputField';
import FullPageLoading from 'containers/FullPageLoading';
import { Container } from './styles';
import { StateContext } from 'context/currentUser';

const validationSchema = yup.object().shape({
  Title: yup.string().required(),
  Description: yup.string().required(),
});

const CreatePostFormModal = ({ isOpen, onClose }) => {
  const { updateContent, setUpdateContent, setLoading } =
    useContext(StateContext);

  const registration = async (data) => {
    setLoading(true);

    const { status } = await connector.post('app/post', data);
    if (status === 200) {
      toast.success('Post created');
      setUpdateContent((prev) => !prev);
      onClose();
    }

    setLoading(false);
  };

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Header>Create post</Modal.Header>
        <Form
          onSubmit={registration}
          validationSchema={validationSchema}
          resetForm={updateContent}
        >
          <InputField name="Title" />
          <InputField name="Description" />

          <Button type="submit" style="green">
            Create
          </Button>
        </Form>
      </Modal>
    </Container>
  );
};

export default CreatePostFormModal;
